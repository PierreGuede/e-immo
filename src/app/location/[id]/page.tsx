"use client"
import { NavBar } from "@/components/menu/header/NavBar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card";

export default function LocatrionID({ params }: { params: { id: number } }) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <div>
            <NavBar />
            <div className="w-10/12 mx-auto flex space-x-4">
                <div className="w-7/12 p-2 bg-blue-200 rounded-md">
                    <Carousel className="w-full max-w-lg   ">
                        <CarouselContent className="">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="">
                                    <div className="p-1 flex  items-center justify-center ">
                                        <Image key={index} src="/maison.jpg" className="rounded-md" alt="picture image" width={550} height={450} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious size="icon" className="left-2   bg-transparent" />
                        <CarouselNext size="icon" className="right-2   bg-transparent" />
                    </Carousel>

                    <div className="py-8 space-y-4">
                        <div>

                        </div>
                    </div>
                </div>

                <div className="w-5/12 p-2 bg-blue-200 rounded-md">

                </div>
            </div>

        </div>

    )
}

