package com.shopintel.backend.controller;

import com.shopintel.backend.dto.StoreProductResponseDTO;
import com.shopintel.backend.service.StoreProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/store-products")
public class StoreProductController {

    private final StoreProductService storeProductService;

    public StoreProductController(
            StoreProductService storeProductService
    ) {
        this.storeProductService = storeProductService;
    }

    @GetMapping
    public List<StoreProductResponseDTO> getActiveStoreProducts() {
        return storeProductService.getActiveStoreProducts();
    }

    @GetMapping("/{id}")
    public StoreProductResponseDTO getActiveStoreProductById(
            @PathVariable Long id
    ) {
        return storeProductService.getActiveStoreProductById(id);
    }

    @GetMapping("/product/{productId}")
    public List<StoreProductResponseDTO> getStoreProductsByProductId(
            @PathVariable Long productId
    ) {
        return storeProductService.getStoreProductsByProductId(productId);
    }

    @GetMapping("/store/{storeId}")
    public List<StoreProductResponseDTO> getStoreProductsByStoreId(
            @PathVariable Long storeId
    ) {
        return storeProductService.getStoreProductsByStoreId(storeId);
    }

    @GetMapping("/store/{storeId}/external/{externalProductId}")
    public StoreProductResponseDTO getByStoreAndExternalProductId(
            @PathVariable Long storeId,
            @PathVariable String externalProductId
    ) {
        return storeProductService.getByStoreAndExternalProductId(
                storeId,
                externalProductId
        );
    }
}