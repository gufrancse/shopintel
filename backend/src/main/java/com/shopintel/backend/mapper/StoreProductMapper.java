package com.shopintel.backend.mapper;

import com.shopintel.backend.dto.StoreProductResponseDTO;
import com.shopintel.backend.entity.StoreProduct;

public class StoreProductMapper {

    private StoreProductMapper() {
        // Utility class
    }

    public static StoreProductResponseDTO toResponseDTO(
            StoreProduct storeProduct
    ) {

        if (storeProduct == null) {
            return null;
        }

        return new StoreProductResponseDTO(
                storeProduct.getId(),

                storeProduct.getProduct().getId(),
                storeProduct.getProduct().getName(),

                storeProduct.getStore().getId(),
                storeProduct.getStore().getName(),
                storeProduct.getStore().getCode(),

                storeProduct.getExternalProductId(),
                storeProduct.getProductUrl(),

                storeProduct.getCurrentPrice(),
                storeProduct.getMrp(),

                storeProduct.getAvailable(),

                storeProduct.getRating(),
                storeProduct.getReviewCount(),

                storeProduct.getActive(),

                storeProduct.getCreatedAt(),
                storeProduct.getUpdatedAt()
        );
    }
}