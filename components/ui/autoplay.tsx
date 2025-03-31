import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "./carousel";

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
    >
      {/* ... */}
    </Carousel>
  );
}
