package com.shopintel.backend.service;

import com.shopintel.backend.dto.StoreResponseDTO;
import com.shopintel.backend.entity.Store;
import com.shopintel.backend.exception.ResourceNotFoundException;
import com.shopintel.backend.mapper.StoreMapper;
import com.shopintel.backend.repository.StoreRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StoreService {

    private final StoreRepository storeRepository;

    public StoreService(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    @Transactional(readOnly = true)
    public List<StoreResponseDTO> getActiveStores() {

        return storeRepository.findByActiveTrue()
                .stream()
                .map(StoreMapper::toResponseDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public StoreResponseDTO getActiveStoreById(Long id) {

        Store store = storeRepository.findByIdAndActiveTrue(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Active store not found with id: " + id
                        )
                );

        return StoreMapper.toResponseDTO(store);
    }

    @Transactional(readOnly = true)
    public StoreResponseDTO getActiveStoreBySlug(String slug) {

        Store store = storeRepository.findBySlugIgnoreCase(slug)
                .filter(Store::getActive)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Active store not found with slug: " + slug
                        )
                );

        return StoreMapper.toResponseDTO(store);
    }

    @Transactional(readOnly = true)
    public StoreResponseDTO getActiveStoreByCode(String code) {

        Store store = storeRepository.findByCodeIgnoreCase(code)
                .filter(Store::getActive)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Active store not found with code: " + code
                        )
                );

        return StoreMapper.toResponseDTO(store);
    }
}