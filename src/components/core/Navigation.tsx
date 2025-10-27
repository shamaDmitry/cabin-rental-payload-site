import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

const menu = [
  { id: 1, name: "About", path: "/about" },
  { id: 2, name: "Gallery", path: "/gallery" },
  { id: 3, name: "Accommodation", path: "/accommodation" },
  { id: 4, name: "How to get there", path: "/contact" },
];

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={cn("flex gap-4 justify-center pt-2.5 pb-8", className)}>
      {menu.map((item) => {
        return (
          <Link
            href={item.path}
            key={item.id}
            className="my-1.5 mx-5 font-semibold hover:text-primary"
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
