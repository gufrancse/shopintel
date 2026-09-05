package com.shopintel.backend.integration.flipkart;

import com.shopintel.backend.integration.StoreAdapter;
import com.shopintel.backend.integration.StoreProductData;
import com.shopintel.backend.integration.StoreSearchRequest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FlipkartAdapter implements StoreAdapter {

    @Override
    public String getStoreCode() {
        return "FLIPKART";
    }

    @Override
    public List<StoreProductData> search(StoreSearchRequest request) {

        // Flipkart API integration will be added here.

        return List.of();
    }
}