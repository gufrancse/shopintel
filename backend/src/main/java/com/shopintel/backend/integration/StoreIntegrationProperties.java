package com.shopintel.backend.integration;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "shopintel.stores")
public record StoreIntegrationProperties(

        StoreProperties amazon,
        StoreProperties flipkart,
        StoreProperties myntra,
        StoreProperties meesho

) {

    public record StoreProperties(
            boolean enabled,
            String baseUrl,
            String apiKey
    ) {
    }
}