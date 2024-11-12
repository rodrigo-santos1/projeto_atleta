import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const Carousell = () => {
  const images = [
    "../nike1.jpeg",
    "../nike1.jpeg",
    "../nike2.jpeg",
    "../nike2.jpeg",
    "../nike3.jpeg",
    "../nike3.jpeg",
    "../nike4.jpeg",
    "../nike4.jpeg",
    "../nike5.jpeg",
    "../nike5.jpeg",
    "../nike6.jpeg",
    "../nike6.jpeg",
    "../nike7.jpeg",
    "../nike7.jpeg",
  ];

  return (
    <div className="relative flex w-full items-center justify-center">
      <Carousel       
        className="w-full max-w-full"
      >
        <CarouselContent className="flex items-center justify-center space-x-4">
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex-none">
              <div className="p-1">
                <Card className="bg-transparent">
                  <CardContent
                    className="flex items-center justify-center bg-transparent p-0"
                    style={{ width: "300px", height: "400px" }}
                  >
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="object-cover"
                      style={{ width: "300px", height: "400px" }}
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