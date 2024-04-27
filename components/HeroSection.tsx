import { Link } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="hero">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Using Collective Intelligence to Maximize Preference Satisfaction
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Wishocracy harnesses the wisdom of the crowd to identify and
            prioritize the most impactful wishes for society.
          </p>
        </div>
        <div className="space-x-4">
          <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-primary-50 dark:text-primary-900 dark:hover:bg-primary-50/90 dark:focus-visible:ring-primary-300"
              href="#"
          >
            Get Involved
          </Link>
          <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-transparent bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
