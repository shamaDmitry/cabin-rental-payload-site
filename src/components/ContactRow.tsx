import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface ContactRowProps {
  name: string;
  phoneNumber: string;
  className?: string;
}

const ContactRow: FC<ContactRowProps> = ({ name, phoneNumber, className }) => {
  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      <span>{name}</span>
      <Link href={`tel:${phoneNumber}`} className="text-secondary">
        {phoneNumber}
      </Link>
    </div>
  );
};

export default ContactRow;
