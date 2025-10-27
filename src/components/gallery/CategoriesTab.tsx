"use client";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CategoriesTabProps {
  activeCategoryId: string;
  galleryCategories: { id: string; label: string; href: string }[];
}

const CategoriesTab: FC<CategoriesTabProps> = ({
  activeCategoryId,
  galleryCategories,
}) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="border-b mb-8 mx-4 flex items-center justify-center">
      {galleryCategories.map((item) => {
        return (
          <Button
            asChild
            key={item.id}
            className={cn(
              "transition opacity-60 relative after:border-b-2 after:border-transparent after:absolute after:bottom-0 after:left-0 after:w-full rounded-none hover:no-underline hover:after:border-foreground text-foreground hover:opacity-100 py-4 px-6 h-auto",
              {
                "after:border-foreground opacity-100": category
                  ? category?.toString() === item.label.toLocaleLowerCase()
                  : activeCategoryId === item.id,
              }
            )}
            variant="link"
          >
            <Link href={item.href} className="block">
              {item.label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default CategoriesTab;
