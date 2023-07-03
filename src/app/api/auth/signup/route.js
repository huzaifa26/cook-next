import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { User } from "@/models/User";

export const POST=async(request)=>{
  const {firstName,lastName,email,password}=await request.json();

  await connect();

  const hashedPassword=await bcrypt.hash(password,5);

  const newUser= new User({
    firstName,
    lastName,
    email,
    password:hashedPassword
  })

  try{
    const result=await newUser.save();
    return new NextResponse("User has been created",{
      status:201,
      data:result
    })
  }catch(error){
    return new NextResponse(error.message,{
      status:500,
    })
  }
}