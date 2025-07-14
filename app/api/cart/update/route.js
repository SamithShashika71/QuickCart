import ConnectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { cartData } = await request.json();

    await ConnectDB();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { cartItems: cartData },
      { new: true }
    );

    return NextResponse.json({ success: true, user: updatedUser });

  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
