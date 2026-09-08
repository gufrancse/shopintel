package com.shopintel.backend.controller;

import com.shopintel.backend.integration.StoreIntegrationService;
import com.shopintel.backend.integration.StoreProductData;
import com.shopintel.backend.integration.StoreSearchRequest;
import com.shopintel.backend.integration.StoreSearchResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/integration")
public class StoreIntegrationController {

    private final StoreIntegrationService storeIntegrationService;

    public StoreIntegrationController(
            StoreIntegrationService storeIntegrationService
    ) {
        this.storeIntegrationService = storeIntegrationService;
    }

    @GetMapping("/stores/{storeCode}/search")
    public StoreSearchResponse searchStore(
            @PathVariable String storeCode,
            @RequestParam String q,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        StoreSearchRequest request =
                new StoreSearchRequest(q, page, size);

        return storeIntegrationService.searchStore(
                storeCode,
                request
        );
    }
}