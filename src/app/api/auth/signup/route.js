import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { User } from "@/models/User";

export const POST=async(request)=>{
  const {name,email,password}=await request.json();

  await connect();

  const hashedPassword=await bcrypt.hash(password,5);

  const newUser= new User({
    name:name,
    email:email,
    password:hashedPassword,
    email_verified:false,
    provider:'credentials'
  })

  try{
    const result=await newUser.save();
    return new NextResponse("User has been created",{
      status:201,
      data:result
    })
  }catch(error){
    if(error.code === 11000){
      return new NextResponse("Account with this email already exist",{
        status:500,
      })
    }
    return new NextResponse(error.message,{
      status:500,
    })
  }
}