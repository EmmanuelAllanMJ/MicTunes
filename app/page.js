import Card from "@/components/UI/Card";
import SongCard from "@/components/UI/SongCard";
import Image from "next/image";

const greeting = () => {
  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return greet;
};

export default function Home() {
  return (
    <div className="ml-5 mt-20  sm:ml-72">
      <h4 class="text-2xl font-bold dark:text-white">
        {`${greeting()}`} Neil Sims
      </h4>
      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          Songs
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Podcast
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <Card title="Liked Songs" src="https://picsum.photos/100" />
        <Card title="Tamil Songs" src="https://picsum.photos/100" />
        <Card title="Hindi Songs" src="https://picsum.photos/100" />
        <Card title="Telugu Songs" src="https://picsum.photos/100" />
        {/* <Card 
          title="Strangers in the Night"
          artist="Frank Sinatra"
          src="https://fastly.picsum.photos/id/444/400/200.jpg?hmac=VYOy0hSegJt8R4FFkN6Wh9l0yEyKEPuDaysoulbQdJw"
        />
        <Card
          title="Strangers in the Night"
          artist="Frank Sinatra"
          src="https://fastly.picsum.photos/id/444/400/200.jpg?hmac=VYOy0hSegJt8R4FFkN6Wh9l0yEyKEPuDaysoulbQdJw"
        /> */}
      </div>
      <h4 class="text-2xl font-bold dark:text-white my-4">Recently Played</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <SongCard
          title="Strangers in the Night"
          artist="Frank Sinatra"
          time="3:00"
          album_name="Strangers in the Night"
        />
        <SongCard
          title="Strangers in the Night"
          artist="Frank Sinatra"
          time="3:00"
          album_name="Strangers in the Night"
        />
        <SongCard
          title="Strangers in the Night"
          artist="Frank Sinatra"
          time="3:00"
          album_name="Strangers in the Night"
        />
        <SongCard
          title="Strangers in the Night"
          artist="Frank Sinatra"
          time="3:00"
          album_name="Strangers in the Night"
        />
      </div>
    </div>
  );
}
