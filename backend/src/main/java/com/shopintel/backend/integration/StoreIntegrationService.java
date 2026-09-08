package com.shopintel.backend.integration;

import org.springframework.stereotype.Service;


@Service
public class StoreIntegrationService {

    private final StoreAdapterRegistry storeAdapterRegistry;

    public StoreIntegrationService(
            StoreAdapterRegistry storeAdapterRegistry
    ) {
        this.storeAdapterRegistry = storeAdapterRegistry;
    }

    public StoreSearchResponse searchStore(
            String storeCode,
            StoreSearchRequest request
    ) {

        StoreAdapter adapter =
                storeAdapterRegistry.getAdapter(storeCode);

        return adapter.search(request);
    }
}