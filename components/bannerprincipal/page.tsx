import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function BannerPrincipal() {
  const images = [
    "/nike1.jpeg",
    "/nike2.jpeg",
    "/nike3.jpeg",
    "/nike4.jpeg",
    "/nike5.jpeg",
    "/nike6.jpeg",
    "/nike7.jpeg"
  ];

  return (
    <section className="relative mb-10 bottom-3 flex w-full items-center justify-center space-y-reverse">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center  p-6">
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="object-cover "
                      style={{ width: "100%", height: "100%" }}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default BannerPrincipal;
