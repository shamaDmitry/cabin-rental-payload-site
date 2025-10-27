import { FC } from "react";
import Headline from "@/components/core/Headline";
import { cn } from "@/lib/utils";
import Container from "@/components/core/Container";
import CafeCard from "@/components/homepage/CafeCard";

interface CafeSection {
  className?: string;
  headline: string;
  description: string;
  imageSrc: string;
}

const CafeSection: FC<CafeSection> = ({
  className,
  headline,
  description,
  imageSrc,
}) => {
  return (
    <section
      className={cn("min-h-80 py-[110px] relative text-center", className)}
    >
      <div className="absolute size-full left-0 top-0 bg-secondary -z-20" />

      <div
        className="absolute size-full left-0 top-0 -z-10 bg-no-repeat bg-[43%_13%] bg-cover"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      />

      <Container className="text-background">
        <Headline className="mb-8">{headline}</Headline>

        <p className="max-w-3xl mx-auto text-lg text-helper mb-8">
          {description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CafeCard
            headline="Free Breakfast"
            description="We are known for our breakfasts, which we serve each day from 9:30 to 11:00. We respect our guests and can offer a diversified menu with something special to satisfy any whimsical taste."
            imageSrc="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce6c3bd9b9007002398fe2b_optimized_1920_c1163x776-154x284.webp"
          />

          <CafeCard
            headline="Free Breakfast"
            description="We are known for our breakfasts, which we serve each day from 9:30 to 11:00. We respect our guests and can offer a diversified menu with something special to satisfy any whimsical taste."
            imageSrc="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce6c3bd9b9007002398fe2b_optimized_1920_c1163x776-154x284.webp"
          />
        </div>
      </Container>
    </section>
  );
};

export default CafeSection;
