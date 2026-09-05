package com.shopintel.backend.mapper;

import com.shopintel.backend.dto.StoreResponseDTO;
import com.shopintel.backend.entity.Store;

public class StoreMapper {

    private StoreMapper() {
        // Utility class
    }

    public static StoreResponseDTO toResponseDTO(Store store) {

        if (store == null) {
            return null;
        }

        return new StoreResponseDTO(
                store.getId(),
                store.getName(),
                store.getCode(),
                store.getSlug(),
                store.getWebsiteUrl(),
                store.getLogoUrl(),
                store.getActive(),
                store.getCreatedAt(),
                store.getUpdatedAt()
        );
    }
}