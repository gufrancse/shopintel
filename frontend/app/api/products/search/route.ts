import { NextRequest, NextResponse } from "next/server";

const BACKEND_API_URL = process.env.BACKEND_API_URL;

export async function GET(request: NextRequest) {
  try {
    if (!BACKEND_API_URL) {
      return NextResponse.json(
        {
          message: "Backend API URL is not configured",
        },
        { status: 500 }
      );
    }

    const searchParams = request.nextUrl.searchParams;

    const query = searchParams.get("q") ?? "";
    const category = searchParams.get("category") ?? "";
    const page = searchParams.get("page") ?? "0";
    const size = searchParams.get("size") ?? "20";

    const backendUrl = new URL(
      `${BACKEND_API_URL}/api/products/search`
    );

    backendUrl.searchParams.set("q", query);
    backendUrl.searchParams.set("category", category);
    backendUrl.searchParams.set("page", page);
    backendUrl.searchParams.set("size", size);

    const response = await fetch(backendUrl.toString(), {
      method: "GET",
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Product search proxy error:", error);

    return NextResponse.json(
      {
        message: "Unable to connect to ShopIntel backend",
      },
      { status: 502 }
    );
  }
}