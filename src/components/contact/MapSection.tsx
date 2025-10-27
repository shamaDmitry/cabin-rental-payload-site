"use client";

import dynamic from "next/dynamic";

const DynamicMapComponent = dynamic(
  () => import("@/components/contact/ContactMap"),
  {
    ssr: false,
  }
);

const MapSection = () => {
  return (
    <section className="relative h-[500px]">
      <DynamicMapComponent posix={[4.79029, -75.69003]} />
    </section>
  );
};

export default MapSection;
