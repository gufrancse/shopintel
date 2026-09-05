package com.shopintel.backend.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(
        name = "store_products",
        indexes = {
                @Index(name = "idx_store_product_product", columnList = "product_id"),
                @Index(name = "idx_store_product_store", columnList = "store_id"),
                @Index(name = "idx_store_product_external_id", columnList = "external_product_id"),
                @Index(name = "idx_store_product_active", columnList = "active")
        },
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "uk_store_external_product",
                        columnNames = {"store_id", "external_product_id"}
                )
        }
)
public class StoreProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "store_id", nullable = false)
    private Store store;

    @Column(name = "external_product_id", nullable = false, length = 255)
    private String externalProductId;

    @Column(length = 1000)
    private String productUrl;

    @Column(precision = 19, scale = 2)
    private BigDecimal currentPrice;

    @Column(precision = 19, scale = 2)
    private BigDecimal mrp;

    @Column(nullable = false)
    private Boolean available = true;

    @Column(precision = 5, scale = 2)
    private BigDecimal rating;

    private Integer reviewCount;

    @Column(nullable = false)
    private Boolean active = true;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    public StoreProduct() {
    }

    @PrePersist
    protected void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public Product getProduct() {
        return product;
    }

    public Store getStore() {
        return store;
    }

    public String getExternalProductId() {
        return externalProductId;
    }

    public String getProductUrl() {
        return productUrl;
    }

    public BigDecimal getCurrentPrice() {
        return currentPrice;
    }

    public BigDecimal getMrp() {
        return mrp;
    }

    public Boolean getAvailable() {
        return available;
    }

    public BigDecimal getRating() {
        return rating;
    }

    public Integer getReviewCount() {
        return reviewCount;
    }

    public Boolean getActive() {
        return active;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public void setExternalProductId(String externalProductId) {
        this.externalProductId = externalProductId;
    }

    public void setProductUrl(String productUrl) {
        this.productUrl = productUrl;
    }

    public void setCurrentPrice(BigDecimal currentPrice) {
        this.currentPrice = currentPrice;
    }

    public void setMrp(BigDecimal mrp) {
        this.mrp = mrp;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }

    public void setRating(BigDecimal rating) {
        this.rating = rating;
    }

    public void setReviewCount(Integer reviewCount) {
        this.reviewCount = reviewCount;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}