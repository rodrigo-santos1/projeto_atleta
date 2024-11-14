import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export function BannerPrincipal() {
  const images: string[] = [
    "/nike1.jpeg",
    "/nike2.jpeg",
    "/nike3.jpeg",
    "/nike4.jpeg",
    "/nike5.jpeg",
    "/nike6.jpeg",
    "/nike7.jpeg",
  ];

  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: false }));

  return (
    <section className="relative bottom-3 mb-10 flex w-full items-center justify-center space-y-reverse">
      <Carousel
        plugins={[plugin.current]}
        className="h-[600px] w-[1000px]"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="h-[600px] w-[1000px] flex-none"
            >
              <div className="h-full w-full p-1">
                <Card className="h-full w-full bg-transparent">
                  <CardContent className="flex h-full w-full items-center justify-center bg-transparent p-0">
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default BannerPrincipal;
