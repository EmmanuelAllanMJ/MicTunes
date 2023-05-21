import Card from "@/components/UI/Card";
import Form from "@/components/UI/Form";
import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";

import { PrismaClient } from "@prisma/client";

// create a new instance of prisma
const prisma = new PrismaClient();

async function Genre({ params }) {
  const {genre} = params

  const songs = await prisma.song.findMany({
      where: {
        genre: genre,
      },
    });

  return (
    <Wrapper>
      <h2 className="text-4xl font-extrabold dark:text-white mb-5">
        {params.genre[0].toUpperCase() + params.genre.substring(1)} Songs
      </h2>
      <div className="grid grid-cols-2 gap-5">

      {songs ? (
        songs.map((song,i) => (
          <Card
          key={i}
            artist={song.artist}
            title={song.title}
            src={song.imageUrl}
            link={`/song/${song.id}`}
            />
            ))
            ) : (
              <p>No songs found</p>
              )}
              </div>
    </Wrapper>
  );
}

export default Genre