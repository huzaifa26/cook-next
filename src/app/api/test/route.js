import { NextResponse } from "next/server";

export const GET = async (request, response) => {
  // await connect();

    return new NextResponse(
      JSON.stringify({
        message: "Server running",
        status: 200,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

}