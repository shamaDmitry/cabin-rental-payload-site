import Headline from "@/components/core/Headline";
import List from "@/components/List";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface Cabin {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  details: string[];
  amenities: { id: string; content: string }[];
}

const CabinCard = ({ data }: { data: Cabin }) => {
  const { amenities, details, imageUrl, name, price } = data;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="rounded-lg overflow-hidden">
        <Image
          className="size-full object-cover"
          src={imageUrl}
          alt={name}
          width={670}
          height={435}
        />
      </div>

      <div>
        <div className="text-4xl mb-4">
          <span className="text-secondary">${price}</span>/a night
        </div>

        <Headline level={4} className="mb-1.5">
          {name}
        </Headline>

        <List data={amenities} className="mb-5" />

        <div className="space-y-1 mb-10">
          {details.map((detail, index) => {
            return <div key={index}>{detail}</div>;
          })}
        </div>

        <Button asChild className="rounded-full" size={"xl"}>
          <Link href="#">Reserve cabin</Link>
        </Button>
      </div>
    </div>
  );
};

export default CabinCard;
