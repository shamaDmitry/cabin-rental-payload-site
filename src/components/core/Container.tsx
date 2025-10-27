import { cn } from "@/lib/utils";
import * as React from "react";

type ContainerProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  children,
  className,
}) => {
  const Comp = Component as React.ElementType;

  return (
    <Comp className={cn("container mx-auto px-4", className)}>{children}</Comp>
  );
};

export default Container;
