package com.shopintel.backend.dto;

import java.time.LocalDateTime;

public record StoreResponseDTO(
        Long id,
        String name,
        String code,
        String slug,
        String websiteUrl,
        String logoUrl,
        Boolean active,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}