package com.shopintel.backend.integration;

import java.util.List;

public record StoreSearchResponse(

        List<StoreProductData> products,

        int page,

        int size,

        boolean hasNext

) {
}