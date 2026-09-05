package com.shopintel.backend.integration;

public record StoreSearchRequest(
        String query,
        int page,
        int size
) {
}