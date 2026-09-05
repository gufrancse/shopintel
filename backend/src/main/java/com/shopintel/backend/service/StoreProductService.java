package com.shopintel.backend.service;

import com.shopintel.backend.dto.StoreProductResponseDTO;
import com.shopintel.backend.entity.StoreProduct;
import com.shopintel.backend.exception.ResourceNotFoundException;
import com.shopintel.backend.mapper.StoreProductMapper;
import com.shopintel.backend.repository.StoreProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StoreProductService {

    private final StoreProductRepository storeProductRepository;

    public StoreProductService(
            StoreProductRepository storeProductRepository
    ) {
        this.storeProductRepository = storeProductRepository;
    }

    @Transactional(readOnly = true)
    public List<StoreProductResponseDTO> getActiveStoreProducts() {

        return storeProductRepository.findByActiveTrue()
                .stream()
                .map(StoreProductMapper::toResponseDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public StoreProductResponseDTO getActiveStoreProductById(
            Long id
    ) {

        StoreProduct storeProduct =
                storeProductRepository.findByIdAndActiveTrue(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Active store product not found with id: " + id
                                )
                        );

        return StoreProductMapper.toResponseDTO(storeProduct);
    }

    @Transactional(readOnly = true)
    public List<StoreProductResponseDTO> getStoreProductsByProductId(
            Long productId
    ) {

        return storeProductRepository
                .findByProductIdAndActiveTrue(productId)
                .stream()
                .map(StoreProductMapper::toResponseDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<StoreProductResponseDTO> getStoreProductsByStoreId(
            Long storeId
    ) {

        return storeProductRepository
                .findByStoreIdAndActiveTrue(storeId)
                .stream()
                .map(StoreProductMapper::toResponseDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public StoreProductResponseDTO getByStoreAndExternalProductId(
            Long storeId,
            String externalProductId
    ) {

        StoreProduct storeProduct =
                storeProductRepository
                        .findByStoreIdAndExternalProductId(
                                storeId,
                                externalProductId
                        )
                        .filter(StoreProduct::getActive)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Active store product not found"
                                )
                        );

        return StoreProductMapper.toResponseDTO(storeProduct);
    }
}