import Image from "next/image";
import React from "react";

function Card({ title, artist, src }) {
  return (
    <>
      <div class="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden flex dark:bg-gray-900 dark:border-gray-700 dark:text-white">
        <img
          src="https://picsum.photos/200"
          alt="Spotify Cover"
          class="w-2/4 h-24 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </>
  );
}

export default Card;
