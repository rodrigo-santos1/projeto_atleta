import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const Carrossel = () => {
  return (
    <Carousel className="flex">
      <CarouselContent>
        <CarouselItem className="basis-1/4">
          <Image src="/futtt.png" alt="Image 1" height={400} width={200} />
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <Image src="/image" alt="Image 2" height={400} width={200} />
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <Image src="/image" alt="Image 3" height={400} width={200} />
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <Image src="/image" alt="Image 4" height={400} width={200} />
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <Image src="/image" alt="Image 5" height={400} width={200} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carrossel;
