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

// async function getData(){
//         const res =  await fetch(`${process.env.SERVER_URL}/api/song`, {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json"
//             }})
//     const data = await res.json();
//     return data
// }



// async function getData(){
//         const res =  await fetch(`https://jsonplaceholder.typicode.com/users/`,{next:{revalidate:10}})
//     const data = await res.json();
//     return data
// }


async function Song() {
    // const res =  await fetch(`/api/song`,{cache:'no-store'})
    // const {randomSong:song} = await res.json();
    const song = await prisma.song.findMany({})
    // const song = await getData()

    // console.log("req song", song)

    return (
        <Wrapper>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

            {/* // <Card
            // key={i}
            //     artist={song.name}
            //     title={song.username}
            //     src={song.webiste}
            //     link={`/song/${song.webiste}`}
            //     />
            //     ))
            //     ) : (
            //     <p>No songs found</p>
                // )} */}
        </div>
        </Wrapper>
    );
}

export default Song