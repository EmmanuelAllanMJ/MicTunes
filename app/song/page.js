import Card from "@/components/UI/Card";
import Form from "@/components/UI/Form";
import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/en'; 
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
import { PrismaClient } from "@prisma/client";

// create a new instance of prisma
const prisma = new PrismaClient();


async function Song() {
    // const res =  await fetch(`/api/song`,{cache:'no-store'})
    // const {randomSong:song} = await res.json();
    const song = await prisma.song.findMany({})
    // const song = await getData()

    // console.log("req song", song)

    return (
        <Wrapper>
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {song ? (
            song.map((song,i) => (
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

        </div> */}
        </Wrapper>
    );
}

export default Song