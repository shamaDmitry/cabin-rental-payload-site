import { FC } from "react";
import Headline from "@/components/core/Headline";
import { cn } from "@/lib/utils";
import Container from "@/components/core/Container";
import ReservationForm from "@/components/homepage/ReservationForm";
import { Card, CardContent } from "@/components/ui/card";

interface ReservationSectionProps {
  className?: string;
}

const ReservationSection: FC<ReservationSectionProps> = ({ className }) => {
  return (
    <section className={cn("min-h-[320px] py-[120px] relative", className)}>
      <div className="absolute size-full left-0 top-0 bg-muted -z-20" />

      <div
        className="absolute size-full left-0 top-0 -z-10 bg-no-repeat bg-[43%_13%] bg-cover"
        style={{
          backgroundImage: `url(https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5cfe6b435da05700239a0c2b?nowebp)`,
        }}
      />

      <Container>
        <Card className="text-center max-w-xl mx-auto p-0">
          <CardContent className="py-12 px-16">
            <Headline level={2} className="font-bold mb-8">
              Make a reservation
            </Headline>

            <p className="text-lg mb-12 text-foreground/60">
              Please complete the form below
            </p>

            <ReservationForm />
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default ReservationSection;
