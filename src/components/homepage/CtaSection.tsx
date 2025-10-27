import { cn } from "@/lib/utils";
import { FC } from "react";
import Headline from "@/components/core/Headline";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CtaSectionProps {
  className?: string;
  title: string;
}

const CtaSection: FC<CtaSectionProps> = ({ className, title }) => {
  return (
    <section
      className={cn(
        "min-h-[320px] py-[180px] px-4 relative text-center",
        className
      )}
    >
      <div className="absolute size-full left-0 top-0 bg-secondary -z-20" />

      <div
        className="absolute size-full left-0 top-0 -z-10 bg-no-repeat bg-[51.88%_15.07%] bg-cover"
        style={{
          background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00b74d032b4e0023acee91?nowebp")`,
        }}
      />

      <Headline className="text-5xl text-background mb-14">{title}</Headline>

      <div className="flex gap-5 justify-center">
        <Button
          asChild
          size={"2xl"}
          className="rounded-full hover:bg-background hover:text-foreground"
        >
          <Link href="tel:+123456789">Call us</Link>
        </Button>

        <Button
          asChild
          variant={"outline"}
          size={"2xl"}
          className="rounded-full hover:bg-background hover:text-foreground text-background"
        >
          <Link href="#">Reservation</Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
