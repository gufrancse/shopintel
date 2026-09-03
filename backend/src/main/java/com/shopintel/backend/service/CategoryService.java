package com.shopintel.backend.service;

import com.shopintel.backend.dto.CategoryResponseDTO;
import com.shopintel.backend.entity.Category;
import com.shopintel.backend.mapper.CategoryMapper;
import com.shopintel.backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public CategoryService(
            CategoryRepository categoryRepository,
            CategoryMapper categoryMapper
    ) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    @Transactional(readOnly = true)
    public List<CategoryResponseDTO> getAllCategories() {

        return categoryRepository.findAll()
                .stream()
                .map(categoryMapper::toResponseDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public Optional<CategoryResponseDTO> getCategoryBySlug(String slug) {

        return categoryRepository.findBySlug(slug)
                .map(categoryMapper::toResponseDTO);
    }

    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }
}