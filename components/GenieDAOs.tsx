import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Icons} from "@/components/icons";
import {Button} from "@/components/ui/button";

const GenieDAOs = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="geniedaos">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        GenieDAOs: Teams United by a Common Wish
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        GenieDAOs are special teams formed within Wishocracy where people with shared passions and
                        skills come
                        together to work on a specific wish. These teams collaborate to develop innovative solutions and
                        strategies to make their chosen wish a reality.
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    <Card>
                        <CardContent className="flex flex-col items-start gap-4">
                            <Icons.users className="h-8 w-8 text-primary"/>
                            <h3 className="text-xl font-bold">Join a GenieDAO</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Connect with others who share your passion for a specific wish.
                            </p>
                            <Button variant="link">Learn More</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-start gap-4">
                            <Icons.rocket className="h-8 w-8 text-primary"/>
                            <h3 className="text-xl font-bold">Start a GenieDAO</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Bring together a team to work on the wish you care about most.
                            </p>
                            <Button variant="link">Learn More</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-start gap-4">
                            <Icons.lightbulb className="h-8 w-8 text-primary"/>
                            <h3 className="text-xl font-bold">Collaborate and Innovate</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Work with your team to develop solutions and strategies to make your wish a reality.
                            </p>
                            <Button variant="link">Learn More</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default GenieDAOs;
