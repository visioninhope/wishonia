import React from 'react';
import Link from "next/link";

const HowWishesWork = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="how-it-works">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <div
                                className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm dark:bg-primary-800">
                                How it Works
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Discovering the Most Impactful Wishes
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Wishocracy allows people to submit wishes they believe would have the greatest positive
                                impact on
                                the world. Through a process of voting and discussion, the community collectively
                                determines which
                                wishes are the most important to focus on.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-primary-50 dark:text-primary-900 dark:hover:bg-primary-50/90 dark:focus-visible:ring-primary-300"
                                href="#"
                            >
                                Discover Wishes
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-transparent bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                Learn About GenieDAOs
                            </Link>
                        </div>
                    </div>
                    <img
                        alt="Wishocracy Platform"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        height="310"
                        src="/placeholder.svg"
                        width="550"
                    />
                </div>
            </div>
        </section>
    );
};

export default HowWishesWork;
