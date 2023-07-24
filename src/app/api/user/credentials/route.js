import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";

export const POST = async (request) => {
  const { userId, oldPassword, newPassword } = await request.json();

  await connect();

  try {
    // Fetch the user from the database
    const user = await User.findById(userId);

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          message: "User not found",
          status: 404,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Check if the old password matches
    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordMatch) {
      return new NextResponse(
        JSON.stringify({
          message: "Old password is incorrect",
          status: 401,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 5);

    // Update the password in the database
    user.password = hashedPassword;
    await user.save();

    return new NextResponse(
      JSON.stringify({
        message: "Password updated successfully",
        status: 200,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error updating password",
        error: error.message,
        status: 500,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};