package com.shopintel.backend.integration.amazon;

import com.shopintel.backend.integration.StoreAdapter;
import com.shopintel.backend.integration.StoreProductData;
import com.shopintel.backend.integration.StoreSearchRequest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AmazonAdapter implements StoreAdapter {

    @Override
    public String getStoreCode() {
        return "AMAZON";
    }

    @Override
    public List<StoreProductData> search(StoreSearchRequest request) {

        // Amazon Creators API integration will be added here.

        return List.of();
    }
}