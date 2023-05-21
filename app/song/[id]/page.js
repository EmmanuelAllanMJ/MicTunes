import Card from "@/components/UI/Card";
import Form from "@/components/UI/Form";
import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/en'; 
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)


import { PrismaClient } from "@prisma/client";
import Image from "next/image";

// create a new instance of prisma
const prisma = new PrismaClient();

// export async function generateStaticParams(){
//   const posts = await getData();
//   return posts.map(post=>({
//       id:post.slug
//   }))
// }
// async function getData(){
//   const res =  await fetch(`https://jsonplaceholder.typicode.com/users/`,{next:{revalidate:10}})
// const data = await res.json();
// return data
// }


async function SongId({ params }) {
  const {id} = params
  dayjs.extend(relativeTime)


  const song = await prisma.song.findFirst({
    where: {
      songId: id,
    },
    select: {
      title: true,
      duration: true,
      album: true,
      genre: true,
      lyrics: true,
      imageUrl: true,
      releaseDate: true,
      artist: {
        select: {
          email: true, // Include the name field from the User table
          imageUrl:true
        },
      },
    },
  });
    console.log(song)

  return (
    <Wrapper>
      <section class="bg-white dark:bg-gray-900">
      <div class="grid gap-8 lg:grid-cols-2">
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                      {song.genre}
                  </span>
                  <span class="text-sm">{ dayjs(song.releaseDate).fromNow(true)}</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{song.title}</a></h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{song.lyrics}</p>
              <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                      <img class="w-7 h-7 rounded-full" src={song.artist.imageUrl} alt="Jese Leos avatar" />
                      <span class="font-medium dark:text-white">
                          {song.artist.email}
                      </span>
                  </div>
                
              </div>
          </article>    
          <Image width={400} height={400} src={song.imageUrl}/>          
      </div>  
</section>
    </Wrapper>
  );
}

export default SongId