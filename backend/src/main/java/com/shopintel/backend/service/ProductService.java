package com.shopintel.backend.service;

import com.shopintel.backend.dto.ProductCreateRequestDTO;
import com.shopintel.backend.dto.ProductResponseDTO;
import com.shopintel.backend.entity.Category;
import com.shopintel.backend.entity.Product;
import com.shopintel.backend.mapper.ProductMapper;
import com.shopintel.backend.repository.CategoryRepository;
import com.shopintel.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.shopintel.backend.dto.ProductUpdateRequestDTO;
import com.shopintel.backend.exception.ResourceNotFoundException;
import com.shopintel.backend.exception.BadRequestException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import com.shopintel.backend.dto.PageResponseDTO;
import com.shopintel.backend.specification.ProductSpecification;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Set;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ProductMapper productMapper;

    public ProductService(
            ProductRepository productRepository,
            CategoryRepository categoryRepository,
            ProductMapper productMapper) {

        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.productMapper = productMapper;
    }

    @Transactional
    public ProductResponseDTO createProduct(ProductCreateRequestDTO request) {

        Category category = categoryRepository.findById(request.categoryId())
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Category not found with id: " + request.categoryId()
                        )
                );

        Product product = new Product();

        product.setName(request.name());
        product.setBrand(request.brand());
        product.setModelNumber(request.modelNumber());
        product.setDescription(request.description());
        product.setProductType(request.productType());
        product.setImageUrl(request.imageUrl());
        product.setCategory(category);

        Product savedProduct = productRepository.save(product);

        return productMapper.toResponseDTO(savedProduct);
    }

    @Transactional(readOnly = true)
    public List<ProductResponseDTO> getAllProducts() {

        return productRepository.findByActiveTrue()
                .stream()
                .map(productMapper::toResponseDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public ProductResponseDTO getProductById(Long id) {

        Product product = productRepository.findByIdAndActiveTrue(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Product not found with id: " + id
                        )
                );

        return productMapper.toResponseDTO(product);
    }

    @Transactional
    public ProductResponseDTO updateProduct(
        Long id,
        ProductUpdateRequestDTO request
    ) {

        Product product = productRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Product not found with id: " + id
                        )
                );

        Category category = categoryRepository.findById(request.categoryId())
            .orElseThrow(() ->
                    new ResourceNotFoundException(
                            "Category not found with id: " + request.categoryId()
                    )
            );

        product.setName(request.name());
        product.setBrand(request.brand());
        product.setModelNumber(request.modelNumber());
        product.setDescription(request.description());
        product.setProductType(request.productType());
        product.setImageUrl(request.imageUrl());
        product.setCategory(category);

        Product updatedProduct = productRepository.save(product);

        return productMapper.toResponseDTO(updatedProduct);
    }

    @Transactional
    public void deleteProduct(Long id) {

        Product product = productRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                            "Product not found with id: " + id
                        )
                );

        product.setActive(false);

        productRepository.save(product);
    }
    
    @Transactional(readOnly = true)
    public PageResponseDTO<ProductResponseDTO> searchProducts(
                String query,
                String brand,
                String category,
                int page,
                int size,
                String sort
    ) {

        String searchQuery = query == null ? "" : query.trim();

        Sort sortOrder = buildSort(sort);

        Pageable pageable = PageRequest.of(
                page,
                size,
                sortOrder
        );

        Specification<Product> specification = Specification
                .where(ProductSpecification.isActive())
                .and(ProductSpecification.hasSearchQuery(searchQuery))
                .and(ProductSpecification.hasBrand(brand))
                .and(ProductSpecification.hasCategorySlug(category));

        Page<ProductResponseDTO> result = productRepository
                .findAll(specification, pageable)
                .map(productMapper::toResponseDTO);

        return new PageResponseDTO<>(
                result.getContent(),
                result.getNumber(),
                result.getSize(),
                result.getTotalElements(),
                result.getTotalPages(),
                result.isFirst(),
                result.isLast()
        );
    }
    private Sort buildSort(String sort) {

        if (sort == null || sort.isBlank()) {
            return Sort.by(
                    Sort.Direction.DESC,
                    "createdAt"
            );
        }

        String[] parts = sort.split(",", -1);

        if (parts.length != 2) {
            throw new BadRequestException(
                    "Invalid sort format. Use field,direction"
            );
        }

        String field = parts[0].trim();
        String directionValue = parts[1].trim().toLowerCase();

        Set<String> allowedFields = Set.of(
                "name",
                "brand",
                "createdAt",
                "updatedAt"
        );

        if (!allowedFields.contains(field)) {
            throw new BadRequestException(
                    "Invalid sort field. Allowed fields: name, brand, createdAt, updatedAt"
            );
        }

        Sort.Direction direction;

        try {
            direction = Sort.Direction.fromString(directionValue);
        } catch (IllegalArgumentException ex) {
            throw new BadRequestException(
                    "Invalid sort direction. Allowed values: asc, desc"
            );
        }

        return Sort.by(direction, field)
        .and(Sort.by(Sort.Direction.ASC, "id"));
    }
}