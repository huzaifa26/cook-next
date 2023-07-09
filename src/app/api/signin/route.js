import { NextResponse } from "next/server";
import connect from "@/utils/db"

export const GET = async(request)=>{
  try{
    await connect();
    return new NextResponse("database connected");
  }catch(e){
    return new NextResponse("Error connecting to database");
  }
}