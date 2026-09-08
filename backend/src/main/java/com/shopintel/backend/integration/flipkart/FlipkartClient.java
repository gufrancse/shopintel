package com.shopintel.backend.integration.flipkart;

import com.shopintel.backend.integration.StoreClient;
import org.springframework.stereotype.Component;

@Component
public class FlipkartClient implements StoreClient {

    @Override
    public String getStoreCode() {
        return "FLIPKART";
    }
}