package com.shopintel.backend.mapper;

import com.shopintel.backend.dto.CategoryResponseDTO;
import com.shopintel.backend.entity.Category;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {

    public CategoryResponseDTO toResponseDTO(Category category) {

        Long parentId = null;
        String parentName = null;

        if (category.getParentCategory() != null) {
            parentId = category.getParentCategory().getId();
            parentName = category.getParentCategory().getName();
        }

        return new CategoryResponseDTO(
                category.getId(),
                category.getName(),
                category.getSlug(),
                category.getDescription(),
                category.getImageUrl(),
                parentId,
                parentName,
                category.getActive(),
                category.getDisplayOrder()
        );
    }
}