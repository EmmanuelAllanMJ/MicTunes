import { NextResponse } from 'next/server';

import { PrismaClient } from "@prisma/client";

// create a new instance of prisma
const prisma = new PrismaClient();
 
export async function POST(req,res) {
    
    const song = await req.json()
    const artist = await prisma.user.findUnique({ where: { email: "test@gmail.com"} });
    console.log(song)
    const users = await prisma.song.create({
        data:{title:song.title,
            duration:+song.duration,
            genre:song.genre,
            lyrics:song.lyrics,
           artist: { connect: { id: artist.id } },
           imageUrl : song.imageUrl,
            album:"MIC"}
    })
    prisma.$disconnect();

    return NextResponse.json({message:"Success"})
}

