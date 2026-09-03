package com.shopintel.backend.dto;

public record CategoryResponseDTO(
        Long id,
        String name,
        String slug,
        String description,
        String imageUrl,
        Long parentId,
        String parentName,
        Boolean active,
        Integer displayOrder
) {
}