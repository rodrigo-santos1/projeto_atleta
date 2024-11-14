

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
    >
      // ...
    </Carousel>
  );
}
