"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface AboutFormProps {
  className?: string;
}

const AboutForm: FC<AboutFormProps> = ({ className }) => {
  return (
    <form className={className}>
      <div className="flex flex-col gap-6 mb-14">
        <div>
          <Input className="" placeholder="Name" />
        </div>

        <div>
          <Input placeholder="Phone number" className="" />
        </div>
      </div>

      <Button className="w-full rounded-full" size="xl">
        Send
      </Button>
    </form>
  );
};

export default AboutForm;
