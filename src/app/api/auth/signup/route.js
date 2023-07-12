import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { User } from "@/models/User";

export const POST = async (request, response) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
    email_verified: false,
    provider: 'credentials'
  })

  try {
    const result = await newUser.save();
    return new NextResponse(
      JSON.stringify({
        message: "Account created successfully",
        status: 201,
        data:result
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    if (error.code === 11000) {
      return new NextResponse(
        JSON.stringify({
          message: "Account with this email already exists",
          status: 409,
          status_key: "Duplicate_entry",
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    return new NextResponse(error.message, {
      status: 500,
    })
  }
}