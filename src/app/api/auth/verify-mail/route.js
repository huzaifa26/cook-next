import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { User } from "@/models/User";
import mongoose from "mongoose";

export const POST = async (request) => {
  const { email, name } = await request.json();

  await connect();
  try {
    const result = await User.updateOne({ email: email, name: name }, {
      $set: {
        email_verified: true
      }
    });

    return new NextResponse(
      JSON.stringify({
        message:"Account successfully verified",
        status: 200,
        data: result
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message:"Account verification failed",
        status: 500,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}