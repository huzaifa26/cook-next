import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { User } from "@/models/User";
import mongoose from "mongoose";

export const POST = async (request) => {
  const { email, ...body } = await request.json();

  await connect();
  try {
    const result = await User.updateOne({ email: email }, {
      $set: {
        isProfileComplete:true,
        ...body
      }
    });

    return new NextResponse(
      JSON.stringify({
        message: "Tutor profile completed",
        status: 201,
        data: result
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      })
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Completing tutor profile failed",
        error: error,
        status: 500,
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      })
  }
}