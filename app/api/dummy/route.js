import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = {
  users: [
    {
      "email": "john.doe@example.com",
    },
    {
      "email": "jane.smith@example.com",
    },
  ],
  songs: [
    {
      "title": "Song 1",
      "artist": "Artist 1",
      "duration": 180,
      "album": "Album 1",
      "genre": "Pop",
      "releaseDate": "2022-01-01"
    },
    {
      "title": "Song 2",
      "artist": "Artist 2",
      "duration": 200,
      "album": "Album 2",
      "genre": "Rock",
      "releaseDate": "2021-12-15"
    },
  ],
  favoriteSongs: [
    // FavoriteSong objects
  ],
  songLists: [
    // SongList objects
  ]
};
export default async function GET(req, res) {
  try {
    
    // Insert users
    const users = await prisma.user.createMany({
      data: data.users,
    });
    
    // Insert songs
    const songs = await prisma.song.createMany({
      data: data.songs,
    });
  
  // Insert favorite songs
  // await prisma.favoriteSong.createMany({
    //   data: data.favoriteSongs,
    // });
    
    // // Insert song lists
    // await prisma.songList.createMany({
      //   data: data.songLists,
      //   include: {
        //     songs: true, // Include the connected songs in the song list
        //   },
        // });
      return res.status(200).json({message:"Success",users,songs})
    }
    catch {
      return res.status(405).json({message:"Something went wrong"})
    }
}