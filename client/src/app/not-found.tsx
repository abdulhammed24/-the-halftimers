import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found ',
};

const Custom404 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="text-red mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-6 text-lg text-gray-700">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link href="/">
        <p className="text-primary hover:underline">Go back to the homepage</p>
      </Link>
    </div>
  );
};

export default Custom404;
