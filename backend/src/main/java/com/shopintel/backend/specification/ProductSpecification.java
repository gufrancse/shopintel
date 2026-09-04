package com.shopintel.backend.specification;

import com.shopintel.backend.entity.Product;
import org.springframework.data.jpa.domain.Specification;

public class ProductSpecification {

    private ProductSpecification() {
        // Utility class
    }

    public static Specification<Product> hasSearchQuery(String query) {

        return (root, criteriaQuery, criteriaBuilder) -> {

            if (query == null || query.isBlank()) {
                return criteriaBuilder.conjunction();
            }

            String normalizedQuery = query
                    .trim()
                    .replaceAll("\\s+", " ")
                    .toLowerCase();

            String searchQuery = "%" + normalizedQuery + "%";

            return criteriaBuilder.or(
                    criteriaBuilder.like(
                            criteriaBuilder.lower(root.get("name")),
                            searchQuery
                    ),
                    criteriaBuilder.like(
                            criteriaBuilder.lower(root.get("brand")),
                            searchQuery
                    ),
                    criteriaBuilder.like(
                            criteriaBuilder.lower(root.get("modelNumber")),
                            searchQuery
                    )
            );
        };
    }

    public static Specification<Product> isActive() {

        return (root, criteriaQuery, criteriaBuilder) ->
                criteriaBuilder.isTrue(root.get("active"));
    }

    public static Specification<Product> hasBrand(String brand) {

        return (root, criteriaQuery, criteriaBuilder) -> {

            if (brand == null || brand.isBlank()) {
                return criteriaBuilder.conjunction();
            }

            return criteriaBuilder.equal(
                    criteriaBuilder.lower(root.get("brand")),
                    brand.trim().toLowerCase()
            );
        };
    }

    public static Specification<Product> hasCategorySlug(String categorySlug) {

        return (root, criteriaQuery, criteriaBuilder) -> {

            if (categorySlug == null || categorySlug.isBlank()) {
                return criteriaBuilder.conjunction();
            }

            return criteriaBuilder.equal(
                    criteriaBuilder.lower(
                            root.get("category").get("slug")
                    ),
                    categorySlug.trim().toLowerCase()
            );
        };
    }
}