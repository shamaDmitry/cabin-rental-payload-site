import { FC, ReactNode } from "react";
import Headline from "../core/Headline";

interface ContactItemProps {
  data: {
    id: string;
    title: string;
    description: ReactNode;
    icon: ReactNode;
  };
}

const ContactItem: FC<ContactItemProps> = ({ data }) => {
  const { title, description, icon } = data;

  return (
    <div className="flex flex-row gap-5">
      <div className="rounded-full size-[50px] md:size-[70px] flex items-center justify-center bg-background shadow shrink-0 text-primary">
        {icon}
      </div>

      <div className="text-left">
        <Headline className="text-lg font-bold mb-5">{title}</Headline>

        <div className="">{description}</div>
      </div>
    </div>
  );
};

export default ContactItem;
