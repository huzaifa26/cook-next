import { User } from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { userId } = await request.json();

  await connect();

  try {
    const result = await User.deleteOne({ _id: userId });
    console.log(result)

    if (result.deletedCount === 0) {
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

    return new NextResponse(
      JSON.stringify({
        message: "User deleted successfully",
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
        message: "Error deleting user",
        error: error,
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
