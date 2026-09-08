import { NextRequest, NextResponse } from "next/server";

const BACKEND_API_URL = process.env.BACKEND_API_URL;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!BACKEND_API_URL) {
      return NextResponse.json(
        { message: "Backend API URL is not configured" },
        { status: 500 }
      );
    }

    const { id } = await params;

    const backendUrl = new URL(
      `${BACKEND_API_URL}/api/products/${encodeURIComponent(id)}`
    );

    const response = await fetch(backendUrl.toString(), {
      method: "GET",
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Product details proxy error:", error);

    return NextResponse.json(
      { message: "Unable to connect to ShopIntel backend" },
      { status: 502 }
    );
  }
}