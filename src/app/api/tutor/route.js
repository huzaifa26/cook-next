import { User } from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const chefs = await User.find({ accountType: 'chef' });
    return new NextResponse(
      JSON.stringify({
        message: "Data fetched succesfully",
        status: 200,
        data: chefs
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

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
    )
  }
}