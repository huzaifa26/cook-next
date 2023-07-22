import { Conversation } from "@/models/Conversation";
import { User } from "@/models/User"; // Assuming you have a User model
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connect();

    const { id, conversationId, message, senderId } = await request.json();

    // const conversation = await Conversation.findById(conversationId);

    // if (!conversation) {
    //   return new NextResponse(
    //     JSON.stringify({
    //       message: "Conversation not found",
    //       status: 404,
    //     }),
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );
    // }

    const result = await Conversation.updateOne(
      { _id: conversationId },
      { $push: { messages: { id, senderId, message, createdAt: new Date() } } }
    );

    const conversation = await Conversation.findById(conversationId);

    // Save the updated conversation document
    return new NextResponse(
      JSON.stringify({
        message: "Message added to conversation",
        status: 200,
        data: conversation,
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
        message: "Error adding message",
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