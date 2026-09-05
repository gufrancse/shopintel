package com.shopintel.backend.integration;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreIntegrationService {

    private final StoreAdapterRegistry storeAdapterRegistry;

    public StoreIntegrationService(
            StoreAdapterRegistry storeAdapterRegistry
    ) {
        this.storeAdapterRegistry = storeAdapterRegistry;
    }

    public List<StoreProductData> searchStore(
            String storeCode,
            StoreSearchRequest request
    ) {

        StoreAdapter adapter =
                storeAdapterRegistry.getAdapter(storeCode);

        return adapter.search(request);
    }
}