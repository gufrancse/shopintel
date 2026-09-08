"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Product = {
  id: number;
  name: string;
  brand?: string;
  modelNumber?: string;
  description?: string;
  imageUrl?: string;
};

type SearchResponse = {
  content: Product[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
};

function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("category") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setQuery(initialQuery);

    if (!initialQuery.trim() && !initialCategory.trim()) {
        setProducts([]);
        return;
    
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
            `/api/products/search?q=${encodeURIComponent(
                initialQuery
            )}&category=${encodeURIComponent(
                initialCategory
            )}&page=0&size=20`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: SearchResponse = await response.json();

        setProducts(data.content);
      } catch (err) {
        console.error(err);
        setError(
          "Unable to connect to ShopIntel backend. Please make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    }, [initialQuery, initialCategory]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      router.push("/search");
      return;
    }

    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

    const handleRemoveCategory = () => {
    if (initialQuery.trim()) {
        router.push(`/search?q=${encodeURIComponent(initialQuery.trim())}`);
        return;
    }

        router.push("/search");
    };

  return (
    <main className="min-h-screen">
      <section className="container-shopintel section-padding pt-12">
        <div className="mx-auto max-w-5xl">
          {/* Search Header */}
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              ShopIntel Search
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              What are you looking to compare?
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Search a product and compare prices, offers and buying options across stores.
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-12">
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center text-gray-500">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20L16.65 16.65" />
                </svg>
              </div>

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search for a product..."
                className="min-w-0 flex-1 bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Search
              </button>
            </div>
          </form>

          {/* Query */}
          {(initialQuery || initialCategory) && (
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500">
                    {initialCategory ? "Products in category" : "Search results for"}
                </p>
                    
                <h2 className="mt-1 text-2xl font-semibold text-gray-950">
                        “{initialCategory || initialQuery}”
                </h2>
                {initialCategory && (
                <button
                type="button"
                onClick={handleRemoveCategory}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:border-gray-300 hover:bg-white hover:text-gray-950"
                >
                {initialCategory}

                <span aria-hidden="true" className="text-sm leading-none">
                ×
                </span>
                </button>
            )}
            </div>

              {!loading && !error && (
                <p className="text-sm text-gray-500">
                  {products.length} result
                  {products.length !== 1 ? "s" : ""}
                </p>
              )}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                    key={item}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                    >
                        {/* Image skeleton */}
                        <div className="aspect-[4/3] animate-pulse bg-gray-100" />
                        <div className="p-5">
                            {/* Brand */}
                            <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                            {/* Product name */}
                            <div className="mt-3 space-y-2">
                                <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
                                <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
                                </div>
                                {/* Description */}
                                <div className="mt-4 space-y-2">
                                    <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                                    <div className="h-3 w-5/6 animate-pulse rounded bg-gray-100" />
                                    </div>
                                    {/* Button */}
                                    <div className="mt-5 h-11 w-full animate-pulse rounded-xl bg-gray-200" />
                                    </div>
                                    </div>
                                ))}
                                </div>
                            )}

          {/* Error */}
        {error && (
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
                </svg>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-gray-950">
                We couldn’t complete your search
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500">
                Something interrupted the connection while we were looking for
                matching products. Please try again.
            </p>

            <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-6 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
                Try again
            </button>
            </div>
        </div>
        )}

        {/* Empty */}
        {!loading && !error && initialQuery && products.length === 0 && (
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L16.65 16.65" />
                </svg>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-gray-950">
                No products found
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500">
                We couldn’t find any active products matching “{initialQuery}”.
                Try a different product, brand, or model.
            </p>

            <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                Try a popular search
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                {[
                    "iPhone",
                    "Laptops",
                    "Headphones",
                    "Smartwatches",
                ].map((item) => (
                    <button
                    key={item}
                    type="button"
                    onClick={() =>
                        router.push(`/search?q=${encodeURIComponent(item)}`)
                    }
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-white hover:text-gray-950"
                    >
                    {item}
                    </button>
                ))}
                </div>
            </div>
            </div>
        </div>
        )}
          {/* Results */}
          {!loading && !error && products.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex aspect-[4/3] items-center justify-center bg-gray-50">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-full w-full object-contain p-8"
                      />
                    ) : (
                      <div className="text-sm text-gray-400">
                        No image available
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    {product.brand && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {product.brand}
                      </p>
                    )}

                    <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-gray-950">
                      {product.name}
                    </h3>

                    {product.modelNumber && (
                      <p className="mt-2 text-xs text-gray-500">
                        Model: {product.modelNumber}
                      </p>
                    )}

                    {product.description && (
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                        {product.description}
                      </p>
                    )}

                    <button
                type="button"
                onClick={() => router.push(`/product/${product.id}`)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                Compare prices
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                </svg>
                </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* No query */}
          {!initialQuery && !initialCategory && (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white/70 p-12 text-center">
              <h2 className="text-xl font-semibold text-gray-950">
                Start your search
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter a product name above to find it on ShopIntel.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function SearchPageFallback() {
  return (
    <main className="min-h-screen">
      <section className="container-shopintel section-padding pt-12">
        <div className="mx-auto max-w-5xl">
          <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-12 w-96 max-w-full animate-pulse rounded bg-gray-200" />

          <div className="mt-10 h-16 animate-pulse rounded-2xl bg-gray-200" />
        </div>
      </section>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchPageFallback />}>
      <SearchResults />
    </Suspense>
  );
}