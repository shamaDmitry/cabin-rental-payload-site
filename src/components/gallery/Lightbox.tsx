"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "@/components/gallery/NextJsImage";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const slides = [
  {
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00bae8378c090023b109b8_optimized_1396.webp",
    width: 1396,
    height: 900,
  },
  {
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00bc3acadfda00238d98ca_optimized_1442.webp",
    width: 1442,
    height: 900,
  },
  {
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00bdef032b4e0023acf635_optimized_1396.webp",
    width: 1396,
    height: 900,
  },
  {
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00baa2378c090023b10996_optimized_1396.webp",
    width: 1396,
    height: 900,
  },
  {
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00bf21f7675700234bf892_optimized_950.webp",
    width: 950,
    height: 900,
  },
  {
    src: "https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00bb7bf7675700234bf1cc_optimized_1396.webp",
    width: 1396,
    height: 900,
  },
];

const GalleryLightbox = () => {
  const [, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <div className="grid grid-cols-12 gap-y-8">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={cn("col-span-4 overflow-hidden rounded-lg mx-4", {
                "col-span-8 row-span-2": index % 6 === 0 || index % 6 === 4,
              })}
            >
              <Image
                className="cursor-pointer size-full object-cover max-h-[700px]"
                src={slide.src}
                alt=""
                width={1000}
                height={500}
                onClick={() => {
                  setOpen(true);
                  setIndex(index);
                }}
              />
            </div>
          );
        })}
      </div>

      <Lightbox
        plugins={[Zoom]}
        index={index}
        open={index >= 0}
        close={() => {
          setOpen(false);
          setIndex(-1);
        }}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
};

export default GalleryLightbox;
