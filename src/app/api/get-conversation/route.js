import { Conversation } from "@/models/Conversation";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connect();

    const { userId } = await request.json();

    const conversations = await Conversation.find({
      $or: [
        { user1: userId },
        { user2: userId },
      ],
    }).populate('user1')
      .populate('user2')


      console.log(conversations)

    return new NextResponse(
      JSON.stringify({
        message: "Data fetched successfully",
        status: 200,
        data: conversations,
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
        message: "Error fetching data",
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