package com.shopintel.backend.dto;

import java.time.LocalDateTime;

public record ProductResponseDTO(

        Long id,

        String name,

        String brand,

        String modelNumber,

        String description,

        String productType,

        String imageUrl,

        Boolean active,

        Long categoryId,

        String categoryName,

        String categorySlug,

        LocalDateTime createdAt,

        LocalDateTime updatedAt

) {
}