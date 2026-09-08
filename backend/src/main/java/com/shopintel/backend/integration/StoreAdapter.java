package com.shopintel.backend.integration;

import java.util.List;

public interface StoreAdapter {

    String getStoreCode();

    StoreSearchResponse search(StoreSearchRequest request);
}