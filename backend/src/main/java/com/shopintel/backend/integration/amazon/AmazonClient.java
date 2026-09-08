package com.shopintel.backend.integration.amazon;

import com.shopintel.backend.integration.StoreClient;
import org.springframework.stereotype.Component;

@Component
public class AmazonClient implements StoreClient {

    @Override
    public String getStoreCode() {
        return "AMAZON";
    }
}