import ActivitiesSection from "@/components/homepage/ActivitiesSection";
import AdventureSection from "@/components/homepage/AdventureSection";
import CafeSection from "@/components/homepage/CafeSection";
import CtaSection from "@/components/homepage/CtaSection";
import FacilitiesSection from "@/components/homepage/FacilitiesSection";
import OrderBanner from "@/components/homepage/OrderBanner";
import RentalSection from "@/components/homepage/RentalSection";
import ReservationSection from "@/components/homepage/ReservationSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";

export default async function Home() {
  return (
    <>
      <OrderBanner />

      <AdventureSection />

      <RentalSection />

      <ActivitiesSection />

      <CtaSection title="Get full answer for your question" />

      <FacilitiesSection
        headline="Our Facilities"
        imageSrc="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce66e2365eb7b002338dc3d_optimized_1372_c1372x946-0x0.webp"
      />

      <CafeSection
        headline="Shop & Cafe"
        description="Yosemite Shop and Cafe is located on site, offering the freshest and the best local food and drinks during the day. We are open morning to late evening during the summer season."
        imageSrc="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00d34e0e8de1002387ddb8?nowebp"
      />

      <TestimonialSection />

      <ReservationSection />
    </>
  );
}
