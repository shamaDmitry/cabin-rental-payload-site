"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const slides = [
  {
    id: uuidv4(),
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d02619f6c856b0023cb8e06_optimized_1661_c1396x930-137x104.webp",
    alt: "guest",
  },
  {
    id: uuidv4(),
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d0261b3d419c600237f7801_optimized_1041_c930x1395-53x166.webp",
    alt: "guest",
  },
  {
    id: uuidv4(),
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d026195b1ef7b0023b72d49_optimized_1920_c1381x920-207x360.webp",
    alt: "guest",
  },
  {
    id: uuidv4(),
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d026187870a5a002344f9eb_optimized_1758_c1396x930-196x177.webp",
    alt: "guest",
  },
  {
    id: uuidv4(),
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d0262ac2169a80023371213_optimized_1013_c930x1395-42x81.webp",
    alt: "guest",
  },
  {
    id: uuidv4(),
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d02619f6c856b0023cb8e06_optimized_1661_c1396x930-137x104.webp",
    alt: "guest",
  },
  {
    id: uuidv4(),
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d0261b3d419c600237f7801_optimized_1041_c930x1395-53x166.webp",
    alt: "guest",
  },
  {
    id: uuidv4(),
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d026195b1ef7b0023b72d49_optimized_1920_c1381x920-207x360.webp",
    alt: "guest",
  },
  {
    id: uuidv4(),
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d026187870a5a002344f9eb_optimized_1758_c1396x930-196x177.webp",
    alt: "guest",
  },
  {
    id: uuidv4(),
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d0262ac2169a80023371213_optimized_1013_c930x1395-42x81.webp",
    alt: "guest",
  },
];

const GuestSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="px-7 relative">
      <Slider {...settings}>
        {slides.map((slide) => {
          return (
            <div
              className="aspect-square relative flex items-center justify-center outline-0"
              key={slide.id}
            >
              <Image
                className="object-cover size-full"
                src={slide.src}
                alt={slide.alt}
                width={400}
                height={400}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default GuestSlider;
