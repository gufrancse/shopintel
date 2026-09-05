package com.shopintel.backend.integration;

import java.math.BigDecimal;

public record StoreProductData(
        String externalProductId,
        String name,
        String brand,
        String modelNumber,
        String description,
        String imageUrl,
        String productUrl,
        BigDecimal currentPrice,
        BigDecimal mrp,
        Boolean available,
        BigDecimal rating,
        Integer reviewCount
) {
}