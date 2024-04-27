import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { Icons } from './icons';

const DiscoverWishes = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32" id="discover-wishes">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Discovering the Most Impactful Wishes
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Wishocracy allows people to submit wishes they believe would have the greatest positive impact
                        on the
                        world. Through a process of voting and discussion, the community collectively determines which
                        wishes
                        are the most important to focus on.
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    <Card>
                        <CardContent className="flex flex-col items-start gap-4">
                            <Icons.lightbulb className="h-8 w-8 text-primary"/>
                            <h3 className="text-xl font-bold">Submit a Wish</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Share your ideas for how to make the world a better place.
                            </p>
                            <Button variant="link">Learn More</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-start gap-4">
                            <Icons.thumbsUp className="h-8 w-8 text-primary"/>
                            <h3 className="text-xl font-bold">Vote on Wishes</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Help the community determine which wishes are the most important.
                            </p>
                            <Button variant="link">Learn More</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-start gap-4">
                            <Icons.lightbulb className="h-8 w-8 text-primary"/>
                            <h3 className="text-xl font-bold">Discuss and Refine</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Collaborate with others to shape the most promising wishes.
                            </p>
                            <Button variant="link">Learn More</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default DiscoverWishes;
