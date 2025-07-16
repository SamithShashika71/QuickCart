import { NextResponse } from "next/server";
import ConnectDB from "@/config/db";
import Product from "@/models/Product";

export async function PUT(request, { params }) {
  try {
    await ConnectDB();
    const productId = params.id;
    const body = await request.json();

    await Product.findByIdAndUpdate(productId, body);

    return NextResponse.json({ success: true, message: "Product updated successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
