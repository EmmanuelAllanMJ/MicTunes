import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs';

import { PrismaClient } from "@prisma/client";

// create a new instance of prisma
const prisma = new PrismaClient();
 
export async function POST(req,res) {
    const user = await currentUser();

    const song = await req.json()
    console.log(song)
    const users = await prisma.song.create({
        data:{title:song.title,duration:+song.duration,genre:song.genre,lyrics:song.lyrics,artist:user.emailAddresses[0].emailAddress, album:"MIC"}
    })
    prisma.$disconnect();

    return NextResponse.json({message:"Success"})
}

