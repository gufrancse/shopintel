package com.shopintel.backend.repository;

import com.shopintel.backend.entity.StoreProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StoreProductRepository
        extends JpaRepository<StoreProduct, Long> {

    List<StoreProduct> findByActiveTrue();

    Optional<StoreProduct> findByIdAndActiveTrue(Long id);

    List<StoreProduct> findByProductIdAndActiveTrue(Long productId);

    List<StoreProduct> findByStoreIdAndActiveTrue(Long storeId);

    Optional<StoreProduct> findByStoreIdAndExternalProductId(
            Long storeId,
            String externalProductId
    );

    boolean existsByStoreIdAndExternalProductId(
            Long storeId,
            String externalProductId
    );
}