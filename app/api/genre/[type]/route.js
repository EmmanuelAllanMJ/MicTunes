import { NextResponse } from 'next/server';

import { PrismaClient } from "@prisma/client";

// create a new instance of prisma
const prisma = new PrismaClient();
 
export async function GET(req, {params}) {

    const {genre} = params

    const songs = await prisma.song.findMany({
        where: {
          genre: genre,
        },
      });
  
    if (!songs) {
      return NextResponse.json({songs:[]});
    }
  
    return NextResponse.json({songs:{songs}});
  }

