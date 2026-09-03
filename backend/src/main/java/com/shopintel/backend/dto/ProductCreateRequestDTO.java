package com.shopintel.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record ProductCreateRequestDTO(

        @NotBlank(message = "Product name is required")
        @Size(max = 255, message = "Product name must not exceed 255 characters")
        String name,

        @Size(max = 100, message = "Brand must not exceed 100 characters")
        String brand,

        @Size(max = 100, message = "Model number must not exceed 100 characters")
        String modelNumber,

        @Size(max = 5000, message = "Description must not exceed 5000 characters")
        String description,

        @Size(max = 100, message = "Product type must not exceed 100 characters")
        String productType,

        @Size(max = 1000, message = "Image URL must not exceed 1000 characters")
        String imageUrl,

        @NotNull(message = "Category ID is required")
        @Positive(message = "Category ID must be a positive number")
        Long categoryId

) {
}