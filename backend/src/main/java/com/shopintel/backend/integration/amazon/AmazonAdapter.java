package com.shopintel.backend.integration.amazon;

import com.shopintel.backend.integration.StoreAdapter;
import com.shopintel.backend.integration.StoreSearchRequest;
import com.shopintel.backend.integration.StoreSearchResponse;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AmazonAdapter implements StoreAdapter {

    private final AmazonClient amazonClient;

    public AmazonAdapter(AmazonClient amazonClient) {
        this.amazonClient = amazonClient;
    }

    @Override
    public String getStoreCode() {
        return amazonClient.getStoreCode();
    }

    @Override
    public StoreSearchResponse search(StoreSearchRequest request) {

        // Amazon API integration will be added here.

        return new StoreSearchResponse(
                List.of(),
                request.page(),
                request.size(),
                false
        );
    }
}