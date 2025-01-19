import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="text-red mb-4 text-4xl font-bold">Post Not Found</h1>
      <p className="mb-6 text-lg text-gray-700">
        Could not find the requested post.
      </p>
      <Link href="/blog">
        <p className="text-primary hover:underline">Return to Blog</p>
      </Link>
    </div>
  );
};

export default Custom404;
