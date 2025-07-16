import { NextResponse } from "next/server";
import ConnectDB from "@/config/db";
import Product from "@/models/Product";

export async function DELETE(request, { params }) {
  try {
    await ConnectDB();
    const { id } = params;

    await Product.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
