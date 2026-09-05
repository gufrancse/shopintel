package com.shopintel.backend.integration;

import com.shopintel.backend.exception.ResourceNotFoundException;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class StoreAdapterRegistry {

    private final Map<String, StoreAdapter> adapters;

    public StoreAdapterRegistry(List<StoreAdapter> storeAdapters) {

        this.adapters = storeAdapters.stream()
                .collect(Collectors.toUnmodifiableMap(
                        adapter -> adapter.getStoreCode().toUpperCase(),
                        Function.identity()
                ));
    }

    public StoreAdapter getAdapter(String storeCode) {

        if (storeCode == null || storeCode.isBlank()) {
            throw new ResourceNotFoundException(
                    "Store code cannot be empty"
            );
        }

        StoreAdapter adapter =
                adapters.get(storeCode.trim().toUpperCase());

        if (adapter == null) {
            throw new ResourceNotFoundException(
                    "No adapter found for store: " + storeCode
            );
        }

        return adapter;
    }
}