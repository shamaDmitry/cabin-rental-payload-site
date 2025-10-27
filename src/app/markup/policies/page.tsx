import ContactItem from "@/components/contact/ContactItem";
import ContactRow from "@/components/ContactRow";
import Container from "@/components/core/Container";
import Headline from "@/components/core/Headline";
import {
  AlarmClock,
  BadgeDollarSign,
  BrushCleaning,
  ChartNetwork,
  CigaretteOff,
  CreditCard,
  KeySquare,
  ToolCase,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    name: "Jessica Moore",
    phoneNumber: "+1 (234) 567 89 00",
  },
  {
    id: uuidv4(),
    name: "Anthony Parker",
    phoneNumber: "+1 (234) 567 89 01",
  },
  {
    id: uuidv4(),
    name: "Mountain Time Cabin Rentals",
    phoneNumber: "+1 (234) 567 89 02",
  },
];

const contactItemData = [
  {
    id: uuidv4(),
    title: "Rates, Taxes, and Fees",
    description:
      "Rates depend on the holiday and peak seasons. Guests are responsible for taxes. Prices, taxes, and fees can be changed without notice.",
    icon: <ChartNetwork className="size-7 md:size-10" />,
  },
  {
    id: uuidv4(),
    title: "Linen",
    description:
      "We supply all cabins with the needed linen. We will not change bath towels and bed linen throughout your stay. A washer/dryer is also available on your request.",
    icon: <ToolCase className="size-7 md:size-10" />,
  },
  {
    id: uuidv4(),
    title: "Smoking",
    description:
      "Smoking is not allowed inside the cabin. Outside smoking is also permitted, but please don't litter and be careful with fire.",
    icon: <CigaretteOff className="size-7 md:size-10" />,
  },
  {
    id: uuidv4(),
    title: "Damage deposit",
    description:
      "The damage deposit will be refunded after the cabin has been inspected for damage and excessive cleaning fees. The damage deposit is $150.",
    icon: <BadgeDollarSign className="size-7 md:size-10" />,
  },
  {
    id: uuidv4(),
    title: "Keys",
    description:
      "You must return the keys upon departure. Re-key the locks in case the keys are lost or not returned, and you are responsible for this procedure.",
    icon: <KeySquare className="size-7 md:size-10" />,
  },
  {
    id: uuidv4(),
    title: "Timing",
    description: (
      <>
        <p>Damage deposit amount is $150</p>
        <p>Check in time 3:00 pm</p>
        <p>Check out time 11:00 am</p>
      </>
    ),
    icon: <AlarmClock className="size-7 md:size-10" />,
  },
  {
    id: uuidv4(),
    title: "Cancellation Policy",
    description: (
      <div className="space-y-7">
        <p>
          Cancellation must be made in writing (acceptable via email) at least 2
          two weeks before the arrival for a full refund minus $25.00 for
          processing.
        </p>

        <p>
          If you want to cancel 7-14 days before arrival, you will receive a 50%
          return if the cabin is not re-booked.
        </p>

        <p>
          Cancellation 6 days or less prior to arrival, you will not receive any
          refund.
        </p>
      </div>
    ),
    icon: <CreditCard className="size-7 md:size-10" />,
  },
  {
    id: uuidv4(),
    title: "Cleaning Requirements",
    description: (
      <>
        <p>
          You should leave the cabin in the same condition it was prior to your
          arrival. Make the beds and wash the dishes and clean all kitchen
          utensils.
        </p>
        <p>
          Our cleaning staff will dust, vacuum, disinfect, wash bedding and make
          beds after your departure. If excessive cleaning is required, an
          appropriate fee will be charged to your deposit.
        </p>
      </>
    ),
    icon: <BrushCleaning className="size-7 md:size-10" />,
  },
];

const PoliciesPage = () => {
  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00faf8525dfe002370a5bb?nowebp")`,
      }}
    >
      <Container className="text-center">
        <Headline className="mb-8">Rental policies</Headline>

        <p className="text-lg mb-1">For all questions refer to</p>

        <div className="text-lg mb-12 space-y-1">
          {data.map((item) => {
            return (
              <ContactRow
                key={item.id}
                name={item.name}
                phoneNumber={item.phoneNumber}
              />
            );
          })}
        </div>

        <div className="mt-11 grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactItemData.map((item) => {
            return <ContactItem key={item.id} data={item} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default PoliciesPage;
