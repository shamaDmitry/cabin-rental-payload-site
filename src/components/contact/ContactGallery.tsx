import Image from "next/image";
import React, { FC } from "react";

interface ContactGalleryProps {
  images: {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

const ContactGallery: FC<ContactGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="row-span-2">
        <Image
          className="size-full object-cover rounded-lg max-h-[520px]"
          src={images[0].src}
          alt={images[0].alt}
          width={images[0].width}
          height={images[0].height}
        />
      </div>

      <div className="flex flex-col gap-5 row-span-2">
        {images.map((item, index) => {
          if (index === 0) return null;

          return (
            <Image
              key={item.id}
              className="object-cover max-h-[250px] rounded-lg h-full"
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactGallery;
