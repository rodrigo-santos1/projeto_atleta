import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const Carousell = () => {
  const images = [
    "/nike1.jpeg",
    "/nike1.jpeg",
    "/nike2.jpeg",
    "/nike2.jpeg",
    "/nike3.jpeg",
    "/nike3.jpeg",
    "/nike4.jpeg",
    "/nike4.jpeg",
    "/nike5.jpeg",
    "/nike5.jpeg",
    "/nike6.jpeg",
    "/nike6.jpeg",
    "/nike7.jpeg",
    "/nike7.jpeg",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="relative flex w-full items-center justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-full"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent className="flex items-center justify-center space-x-4">
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex-none">
              <div className="p-1">
                <Card className="bg-transparent">
                  <CardContent
                    className="flex items-center justify-center bg-transparent p-0"
                    style={{ width: "390px", height: "400px" }} 
                  >
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      width={390}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Carousell;
