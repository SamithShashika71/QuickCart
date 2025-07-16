import { NextResponse } from "next/server";
import ConnectDB from "@/config/db";
import Product from "@/models/Product";

export async function GET(request, { params }) {
  try {
    await ConnectDB();
    const product = await Product.findById(params.id);

    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, product });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
