import React from "react";

function SongCard({ title, artist, time, album_name }) {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900 dark:border-gray-700 dark:text-white">
      <img
        src="https://picsum.photos/200"
        alt="Spotify Cover"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{artist}</p>
        <div className="flex items-center mt-3">
          <svg
            className="w-4 h-4 text-gray-500 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 3a1 1 0 012 0v7l6.15 3.85a1 1 0 11-1 1.7L11 11.71V3a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
        <div className="flex items-center mt-3">
          <svg
            className="w-4 h-4 text-gray-500 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs text-gray-500">{album_name}</p>
        </div>
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          Play
        </button>
      </div>
    </div>
  );
}

export default SongCard;
