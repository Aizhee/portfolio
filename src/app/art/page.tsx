import React from 'react';
import Link from 'next/link';

const ArtPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
        Art Page
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        This page is currently a work in progress. Stay tuned for updates!
      </p>
  <Link href="/" className="mt-6 px-4 py-2 border-2 border-black dark:border-white dark:text-white rounded-full hover:border-mint-500 hover:text-mint-500 dark:hover:border-mint-500 dark:hover:text-mint-500 transition">
        Return to Home
      </Link>
    </div>
  );
};

export default ArtPage;
