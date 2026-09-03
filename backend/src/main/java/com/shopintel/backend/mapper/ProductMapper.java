package com.shopintel.backend.mapper;

import com.shopintel.backend.dto.ProductResponseDTO;
import com.shopintel.backend.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public ProductResponseDTO toResponseDTO(Product product) {

        Long categoryId = null;
        String categoryName = null;
        String categorySlug = null;

        if (product.getCategory() != null) {
            categoryId = product.getCategory().getId();
            categoryName = product.getCategory().getName();
            categorySlug = product.getCategory().getSlug();
        }

        return new ProductResponseDTO(
                product.getId(),
                product.getName(),
                product.getBrand(),
                product.getModelNumber(),
                product.getDescription(),
                product.getProductType(),
                product.getImageUrl(),
                product.getActive(),
                categoryId,
                categoryName,
                categorySlug,
                product.getCreatedAt(),
                product.getUpdatedAt()
        );
    }
}