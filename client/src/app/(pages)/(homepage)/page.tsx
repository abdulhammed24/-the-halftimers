import { Suspense } from "react";
import Hero from "./Hero";
import Podcast from "./Podcast";
import dynamic from "next/dynamic";

const Featured = dynamic(() => import("./Featured"));
const LatestNews = dynamic(() => import("./LatestNews"));

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
