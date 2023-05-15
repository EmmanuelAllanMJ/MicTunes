import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const PlayList = () => {
  return (
    <Wrapper>
      <div className="dark:bg-gray-800 min-h-screen">
        <div className="container mx-auto py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-white">My Playlist</h1>
            <button className="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded-full">
              Create New Playlist
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded overflow-hidden">
              <img
                className="w-full h-64 object-cover rounded"
                src="https://picsum.photos/200"
                alt="Playlist Image"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-white mt-4 ">
                  Workout Playlist
                </h2>
                <p className="text-gray-300 mt-2">By John Doe</p>
                <p className="text-gray-300 mt-2">20 Songs</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded overflow-hidden">
              <img
                className="w-full h-64 object-cover rounded"
                src="https://picsum.photos/400"
                alt="Playlist Image"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-white mt-4 ">
                  Workout Playlist
                </h2>
                <p className="text-gray-300 mt-2">By John Doe</p>
                <p className="text-gray-300 mt-2">20 Songs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PlayList;
