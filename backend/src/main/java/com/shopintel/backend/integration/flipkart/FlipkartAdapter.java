package com.shopintel.backend.integration.flipkart;

import com.shopintel.backend.integration.StoreAdapter;
import com.shopintel.backend.integration.StoreSearchRequest;
import com.shopintel.backend.integration.StoreSearchResponse;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FlipkartAdapter implements StoreAdapter {

    private final FlipkartClient flipkartClient;

    public FlipkartAdapter(FlipkartClient flipkartClient) {
        this.flipkartClient = flipkartClient;
    }

    @Override
    public String getStoreCode() {
        return flipkartClient.getStoreCode();
    }

    @Override
    public StoreSearchResponse search(StoreSearchRequest request) {

        // Flipkart API integration will be added here.

        return new StoreSearchResponse(
                List.of(),
                request.page(),
                request.size(),
                false
        );
    }
}