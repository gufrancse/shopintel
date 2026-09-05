package com.shopintel.backend.integration;

import java.util.List;

public interface StoreAdapter {

    String getStoreCode();

    List<StoreProductData> search(StoreSearchRequest request);
}