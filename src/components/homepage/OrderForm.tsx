"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface OrderCallFormProps {
  className?: string;
}

const OrderCallForm: FC<OrderCallFormProps> = ({ className }) => {
  // const fetchData = async () => {
  //   const res = await fetch("/api/my-route");
  //   const data = await res.json();

  //   console.log("data", data);
  // };

  // useEffect(() => {
  //   fetchData();

  //   return () => {};
  // }, []);

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
        Order a call
      </Button>
    </form>
  );
};

export default OrderCallForm;
