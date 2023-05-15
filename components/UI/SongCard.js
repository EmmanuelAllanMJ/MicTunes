import React from "react";

function SongCard({ title, artist, time, album_name }) {
  return (
    <div class="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900 dark:border-gray-700 dark:text-white">
      <img
        src="https://picsum.photos/200"
        alt="Spotify Cover"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">{title}</h3>
        <p class="text-sm text-gray-500">{artist}</p>
        <div class="flex items-center mt-3">
          <svg
            class="w-4 h-4 text-gray-500 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 3a1 1 0 012 0v7l6.15 3.85a1 1 0 11-1 1.7L11 11.71V3a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="text-xs text-gray-500">{time}</p>
        </div>
        <div class="flex items-center mt-3">
          <svg
            class="w-4 h-4 text-gray-500 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="text-xs text-gray-500">{album_name}</p>
        </div>
        <button class="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          Play
        </button>
      </div>
    </div>
  );
}

export default SongCard;
