import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface AddressRowProps {
  label: string;
  content: ReactNode;
  className?: string;
}

const AddressRow: FC<AddressRowProps> = ({ label, content, className }) => {
  return (
    <div className={cn("table-row", className)}>
      <div className="align-middle table-cell py-2 px-3.5 pl-0 font-bold">
        {label}
      </div>
      <div className="align-middle table-cell py-2 px-3.5 pr-0">{content}</div>
    </div>
  );
};

export default AddressRow;
