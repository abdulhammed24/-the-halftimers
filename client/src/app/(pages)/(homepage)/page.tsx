import { Suspense } from "react";
import Hero from "./components/Hero";
import Podcast from "./components/Podcast";
import dynamic from "next/dynamic";

const Featured = dynamic(() => import("./components/Featured"));
const LatestNews = dynamic(() => import("./components/LatestNews"));

const HomePage = () => {
  return (
    <>
      <Hero />

      <Suspense fallback={<div>Loading Featured...</div>}>
        <Featured />
      </Suspense>

      <Podcast />

      <Suspense fallback={<div>Loading Latest News...</div>}>
        <LatestNews />
      </Suspense>
    </>
  );
};

export default HomePage;
