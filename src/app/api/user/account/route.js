import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { User } from "@/models/User";

export const POST = async (request) => {
  const { userId, name, timeZone, picture } = await request.json();

  await connect();

  try {
    const result = await User.updateOne(
      { _id: userId },
      { $set: { name: name, timeZone: timeZone, picture: picture } }
    );

    return new NextResponse(
      JSON.stringify({
        message: "Name and Timezone updated successfully",
        status: 201,
        data: result,
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
        message: "Updating Name and Timezone failed",
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