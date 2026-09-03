package com.shopintel.backend.config;

import com.shopintel.backend.entity.Category;
import com.shopintel.backend.repository.CategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CategoryDataInitializer {

    @Bean
    CommandLineRunner loadCategories(CategoryRepository categoryRepository) {
        return args -> {

            // =========================
            // ELECTRONICS
            // =========================

            Category electronics = createCategory(
                    categoryRepository,
                    "Electronics",
                    "electronics",
                    "Mobiles, laptops, headphones, TVs and other electronic products",
                    null,
                    1
            );

            createCategory(
                    categoryRepository,
                    "Mobiles",
                    "mobiles",
                    "Smartphones and mobile phones",
                    electronics,
                    1
            );

            createCategory(
                    categoryRepository,
                    "Laptops",
                    "laptops",
                    "Laptops and notebooks",
                    electronics,
                    2
            );

            createCategory(
                    categoryRepository,
                    "Headphones",
                    "headphones",
                    "Headphones, earbuds and audio products",
                    electronics,
                    3
            );

            createCategory(
                    categoryRepository,
                    "Televisions",
                    "televisions",
                    "Smart TVs and televisions",
                    electronics,
                    4
            );

            createCategory(
                    categoryRepository,
                    "Smartwatches",
                    "smartwatches",
                    "Smartwatches and wearable devices",
                    electronics,
                    5
            );

            createCategory(
                    categoryRepository,
                    "Cameras",
                    "cameras",
                    "Digital cameras and photography products",
                    electronics,
                    6
            );


            // =========================
            // GROCERY
            // =========================

            Category grocery = createCategory(
                    categoryRepository,
                    "Grocery",
                    "grocery",
                    "Everyday grocery and food products",
                    null,
                    2
            );

            createCategory(
                    categoryRepository,
                    "Fruits & Vegetables",
                    "fruits-vegetables",
                    "Fresh fruits and vegetables",
                    grocery,
                    1
            );

            createCategory(
                    categoryRepository,
                    "Dairy",
                    "dairy",
                    "Milk, curd, butter and other dairy products",
                    grocery,
                    2
            );

            createCategory(
                    categoryRepository,
                    "Snacks",
                    "snacks",
                    "Chips, biscuits and other snack products",
                    grocery,
                    3
            );

            createCategory(
                    categoryRepository,
                    "Beverages",
                    "beverages",
                    "Juices, soft drinks and other beverages",
                    grocery,
                    4
            );


            // =========================
            // FASHION
            // =========================

            Category fashion = createCategory(
                    categoryRepository,
                    "Fashion",
                    "fashion",
                    "Clothing, footwear and fashion products",
                    null,
                    3
            );

            createCategory(
                    categoryRepository,
                    "Men",
                    "men",
                    "Men's clothing and fashion",
                    fashion,
                    1
            );

            createCategory(
                    categoryRepository,
                    "Women",
                    "women",
                    "Women's clothing and fashion",
                    fashion,
                    2
            );

            createCategory(
                    categoryRepository,
                    "Kids",
                    "kids",
                    "Kids' clothing and fashion",
                    fashion,
                    3
            );

            createCategory(
                    categoryRepository,
                    "Footwear",
                    "footwear",
                    "Shoes, sandals and other footwear",
                    fashion,
                    4
            );


            // =========================
            // HOME & KITCHEN
            // =========================

            Category homeKitchen = createCategory(
                    categoryRepository,
                    "Home & Kitchen",
                    "home-kitchen",
                    "Home, kitchen and household products",
                    null,
                    4
            );

            createCategory(
                    categoryRepository,
                    "Kitchen",
                    "kitchen",
                    "Kitchen appliances and accessories",
                    homeKitchen,
                    1
            );

            createCategory(
                    categoryRepository,
                    "Furniture",
                    "furniture",
                    "Furniture and home furnishing products",
                    homeKitchen,
                    2
            );

            createCategory(
                    categoryRepository,
                    "Home Appliances",
                    "home-appliances",
                    "Appliances used in homes",
                    homeKitchen,
                    3
            );
        };
    }

    private Category createCategory(
            CategoryRepository categoryRepository,
            String name,
            String slug,
            String description,
            Category parentCategory,
            int displayOrder
    ) {

        return categoryRepository.findBySlug(slug)
                .orElseGet(() -> {

                    Category category = new Category();

                    category.setName(name);
                    category.setSlug(slug);
                    category.setDescription(description);
                    category.setParentCategory(parentCategory);
                    category.setDisplayOrder(displayOrder);

                    return categoryRepository.save(category);
                });
    }
}