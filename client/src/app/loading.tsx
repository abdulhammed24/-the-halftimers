export default function PageLoader() {
  return (
    <div className="red fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="relative before:absolute before:left-0 before:top-1/2 before:h-1 before:w-5 before:-translate-y-1/2 before:bg-foreground before:content-['']">
        <div className={"ml-7 text-lg font-bold italic lg:text-2xl"}>
          The Halftimers
        </div>
      </div>
    </div>
  );
}
