package com.shopintel.backend.repository;

import com.shopintel.backend.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StoreRepository extends JpaRepository<Store, Long> {

    List<Store> findByActiveTrue();

    Optional<Store> findByIdAndActiveTrue(Long id);

    Optional<Store> findByCodeIgnoreCase(String code);

    Optional<Store> findBySlugIgnoreCase(String slug);

    boolean existsByCodeIgnoreCase(String code);

    boolean existsBySlugIgnoreCase(String slug);
}