import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { User } from "@/models/User";
import mongoose from "mongoose";

export const POST = async (request) => {
  const { name, email, accountType } = await request.json();


  await connect();
  try {
    const result = await User.updateOne({ email: email, name: name }, {
      $set: {
        accountType: accountType
      }
    });

    return new NextResponse(
      JSON.stringify({
        message: "Account type added",
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
        message: "Adding account type failed",
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