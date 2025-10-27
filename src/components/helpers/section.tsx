import { FC } from "react";
import Headline from "@/components/core/Headline";
import { cn } from "@/lib/utils";

interface Section {
  className?: string;
}

const Section: FC<Section> = ({ className }) => {
  return (
    <section className={cn("min-h-[320px] py-20", className)}>
      <Headline>Section</Headline>
    </section>
  );
};

export default Section;
