import Image from "next/image";
import React from "react";

const Artist = ({imageUrl}) => {
  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
      <Image
        width={32}
        height={32}
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="Playlist Cover"
        className="w-full"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">My Playlist</h3>
        <p className="text-gray-600">by John Doe</p>
        <div className="flex items-center mt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Play
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ml-4">
            Follow
          </button>
        </div>
        <ul className="mt-6">
          <li className="flex items-center py-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">Song Title 1</p>
              <p className="text-gray-600">Artist Name 1</p>
            </div>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded">
              Add
            </button>
          </li>
          <li className="flex items-center py-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">Song Title 2</p>
              <p className="text-gray-600">Artist Name 2</p>
            </div>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded">
              Add
            </button>
          </li>
          <li className="flex items-center py-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">Song Title 3</p>
              <p className="text-gray-600">Artist Name 3</p>
            </div>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded">
              Add
            </button>
          </li>
          {/* Add more song items */}
        </ul>
      </div>
    </div>
  );
};

export default Artist;
