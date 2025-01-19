import { Suspense } from "react";
import Hero from "./components/Hero";
import Podcast from "./components/Podcast";
import { Skeleton } from "@/components/ui/skeleton";
import Featured from "./components/Featured";
import LatestNews from "./components/LatestNews";
import { fetchPosts } from "@/utils/fetchPosts";
import { BlogPost } from "@/types/blog";

export default async function HomePage() {
  const posts: BlogPost[] = await fetchPosts();

  return (
    <>
      <Hero />

      <Suspense fallback={<FeaturedSkeleton />}>
        <Featured posts={posts} />
      </Suspense>

      <Podcast />

      <Suspense fallback={<LatestNewsSkeleton />}>
        <LatestNews posts={posts} />
      </Suspense>
    </>
  );
}

function FeaturedSkeleton() {
  return (
    <div className="relative z-20 xl:-mt-[100px]">
      <div className="container mx-auto">
        <div className="py-10 lg:p-10">
          <Skeleton className="mb-5 h-4 w-24" />
          <div className="grid gap-4 md:grid-cols-2">
            <Skeleton className="h-64 w-full" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LatestNewsSkeleton() {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="lg:p-10">
          <Skeleton className="mb-10 h-8 w-48" />
          <div className="space-y-10">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="grid gap-4 md:grid-cols-2">
                <Skeleton className="h-64 w-full" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
