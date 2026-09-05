package com.shopintel.backend.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record StoreProductResponseDTO(
        Long id,

        Long productId,
        String productName,

        Long storeId,
        String storeName,
        String storeCode,

        String externalProductId,
        String productUrl,

        BigDecimal currentPrice,
        BigDecimal mrp,

        Boolean available,

        BigDecimal rating,
        Integer reviewCount,

        Boolean active,

        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}