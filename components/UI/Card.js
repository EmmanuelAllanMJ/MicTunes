import Image from "next/image";
import React from "react";

function Card({ title, artist, src }) {
  return (
    <a
      href="#"
      class="h-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="https://picsum.photos/50"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class=" font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
    </a>
  );
}

export default Card;
