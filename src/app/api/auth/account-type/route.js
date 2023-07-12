import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { User } from "@/models/User";
import mongoose from "mongoose";

export const POST = async (request) => {
  const { userId, accountType } = await request.json();

  await connect();
  try {
    const result = await User.updateOne({ _id: mongoose.Types.ObjectId(userId) }, {
      $set: {
        accountType: accountType
      }
    });

    return new NextResponse("User has been updated", {
      status: 201,
      data: result
    })
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    })
  }
}