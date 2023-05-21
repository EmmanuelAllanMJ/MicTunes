import { NextResponse } from 'next/server';

import { PrismaClient } from "@prisma/client";

// create a new instance of prisma
const prisma = new PrismaClient();
 
export const GET = async (request) => {
    
    try {
        const randomSong = await prisma.song.find()
        print("printing")
        prisma.$disconnect();
        console.log("printing")
        return new Response(JSON.stringify(randomSong))
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}

