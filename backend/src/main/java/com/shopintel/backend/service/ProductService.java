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

import java.util.List;

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
                        new IllegalArgumentException(
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
                        new IllegalArgumentException(
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
                        new IllegalArgumentException(
                                "Product not found with id: " + id
                        )
                );

        Category category = categoryRepository.findById(request.categoryId())
            .orElseThrow(() ->
                    new IllegalArgumentException(
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
                        new IllegalArgumentException(
                            "Product not found with id: " + id
                        )
                );

        product.setActive(false);

        productRepository.save(product);
    }
}