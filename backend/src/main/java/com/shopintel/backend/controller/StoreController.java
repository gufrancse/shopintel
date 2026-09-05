package com.shopintel.backend.controller;

import com.shopintel.backend.dto.StoreResponseDTO;
import com.shopintel.backend.service.StoreService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stores")
public class StoreController {

    private final StoreService storeService;

    public StoreController(StoreService storeService) {
        this.storeService = storeService;
    }

    @GetMapping
    public List<StoreResponseDTO> getActiveStores() {
        return storeService.getActiveStores();
    }

    @GetMapping("/{id}")
    public StoreResponseDTO getActiveStoreById(
            @PathVariable Long id
    ) {
        return storeService.getActiveStoreById(id);
    }

    @GetMapping("/slug/{slug}")
    public StoreResponseDTO getActiveStoreBySlug(
            @PathVariable String slug
    ) {
        return storeService.getActiveStoreBySlug(slug);
    }

    @GetMapping("/code/{code}")
    public StoreResponseDTO getActiveStoreByCode(
            @PathVariable String code
    ) {
        return storeService.getActiveStoreByCode(code);
    }
}