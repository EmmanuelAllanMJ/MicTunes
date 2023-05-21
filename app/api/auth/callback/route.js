import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs';

import { PrismaClient } from "@prisma/client";

// create a new instance of prisma
const prisma = new PrismaClient();
 
export async function POST(request) {
    console.log("post request")
    const user = await currentUser();
  if(!user){
    return new Response("Unauthorized", { status: 401 });
  }
  const users = await prisma.user.findMany({
    where: {
        userId:user.id
    },
  });
  if(users){
    prisma.$disconnect();
    return NextResponse.json({...user, message:"User exists"})
  }

  try {
    const createdUser = await prisma.user.create({
      data: {
        userId : user.id,
       email: user.emailAddresses[0].emailAddress,
      },
    });
    prisma.$disconnect();
    return NextResponse.json({...createdUser,message:"user created"});
  } catch (error) {
    console.error(error);
    prisma.$disconnect();
    return NextResponse.json({ error: 'Unable to create user.' });
  }


}

