"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  brand?: string;
  modelNumber?: string;
  description?: string;
  imageUrl?: string;
};

function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const productId = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/products/${encodeURIComponent(productId)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data: Product = await response.json();

        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load this product.");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <main className="min-h-screen">
        <section className="container-shopintel section-padding pt-12">
          <div className="mx-auto max-w-6xl">
            <div className="animate-pulse">
              <div className="h-4 w-28 rounded bg-gray-200" />

              <div className="mt-8 grid gap-10 lg:grid-cols-2">
                <div className="aspect-square rounded-3xl bg-gray-200" />

                <div className="space-y-5">
                  <div className="h-4 w-24 rounded bg-gray-200" />
                  <div className="h-10 w-3/4 rounded bg-gray-200" />
                  <div className="h-20 w-full rounded bg-gray-100" />
                  <div className="h-14 w-full rounded-2xl bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-screen">
        <section className="container-shopintel section-padding pt-16">
          <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
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
                <path d="M9 9l6 6" />
                <path d="M15 9l-6 6" />
              </svg>
            </div>

            <h1 className="mt-5 text-2xl font-semibold tracking-tight text-gray-950">
              Product not found
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
              We couldn’t load this product. It may no longer be available.
            </p>

            <button
              type="button"
              onClick={() => router.push("/search")}
              className="mt-6 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Back to search
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="container-shopintel section-padding pt-10">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <button
            type="button"
            onClick={() => router.back()}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-950"
          >
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to results
          </button>

          {/* Product Overview */}
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Product Image */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className="flex aspect-square items-center justify-center bg-gray-50">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={700}
                    height={700}
                    className="h-full w-full object-contain p-10"
                    />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    </div>

                    <p className="mt-3 text-sm text-gray-400">
                      Product image unavailable
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                {product.brand || "Product"}
              </p>

              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                {product.name}
              </h1>

              {product.modelNumber && (
                <p className="mt-4 text-sm text-gray-500">
                  Model:{" "}
                  <span className="font-medium text-gray-700">
                    {product.modelNumber}
                  </span>
                </p>
              )}

              {product.description && (
                <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
                  {product.description}
                </p>
              )}

              {/* Comparison Summary */}
              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m7 16 4-5 3 3 5-7" />
                    </svg>
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-gray-950">
                      Compare prices. Choose smarter.
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      ShopIntel will compare prices, offers and buying options
                      across stores for this product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Store Comparison Section */}
          <section className="mt-16">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                Store comparison
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-950">
                Where should you buy?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                Compare the available buying options for this product in one
                place.
              </p>
            </div>

            {/* No store data yet */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
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
                    <path d="M3 6h18" />
                    <path d="M6 6v14h12V6" />
                    <path d="M9 10v6" />
                    <path d="M15 10v6" />
                    <path d="M8 6l1-3h6l1 3" />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-gray-950">
                  Store prices coming soon
                </h3>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500">
                  ShopIntel’s store integrations will bring prices, offers,
                  delivery details and seller information together here.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;