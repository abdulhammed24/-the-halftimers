import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonBlogCard() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="relative overflow-hidden pt-[60%]">
        <Skeleton className="h-full w-full rounded-lg" />
      </div>
      <div className="bg-primary-foreground p-8">
        <div className="mb-3 flex items-center gap-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <div>
            <Skeleton className="h-4 w-24" />
            <div className="flex items-center">
              <Skeleton className="h-4 w-16" />{" "}
              <span className="mx-2 block size-[2px] rounded-full bg-foreground" />{" "}
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
        <div className="mb-6 space-y-3">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="mt-3 pt-3">
          <span className="mb-4 block h-[1px] bg-foreground/20"></span>
          <div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex">
                <div className="flex flex-wrap items-center gap-5">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
