import { FC } from "react";
import Headline from "@/components/core/Headline";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "@/components/core/Container";

interface FacilitiesSectionProps {
  className?: string;
  headline: string;
  imageSrc: string;
}

const FacilitiesSection: FC<FacilitiesSectionProps> = ({
  className,
  headline,
  imageSrc,
}) => {
  return (
    <section className={cn("min-h-[320px] py-20", className)}>
      <Container className="text-center max-w-4xl">
        <Headline className="mb-12">{headline}</Headline>

        <figure className="overflow-hidden rounded-xl">
          <Image
            src={imageSrc}
            alt={headline}
            width={1000}
            height={450}
            className="w-full"
          />
        </figure>
      </Container>
    </section>
  );
};

export default FacilitiesSection;
