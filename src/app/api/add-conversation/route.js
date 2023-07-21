import { Conversation } from "@/models/Conversation";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connect();

    const { user1, user2 } = await request.json();

    const conversation = new Conversation({
      user1: user1,
      user2: user2,
    });

    const res = await conversation.save();
    return new NextResponse(
      JSON.stringify({
        message: "Conversation created successfully",
        status: 200,
        data: res,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error creating conversation",
        status: 500,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}