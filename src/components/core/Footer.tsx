import { cn } from "@/lib/utils";
import React from "react";
import Container from "@/components/core/Container";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Headline from "./Headline";

interface FooterProps {
  className?: string;
}

const menu = [
  {
    id: uuidv4(),
    href: "/about",
    label: "About",
  },
  {
    id: uuidv4(),
    href: "/gallery",
    label: "Photos",
  },
  {
    id: uuidv4(),
    href: "/accommodation",
    label: "Accommodation",
  },
  {
    id: uuidv4(),
    href: "/policies",
    label: "Rental policies",
  },
  {
    id: uuidv4(),
    href: "/contact",
    label: "How to get there",
  },
];

const socialMenu = [
  {
    id: uuidv4(),
    href: "#",
    label: "facebook",
    icon: <Facebook className="size-5" />,
  },
  {
    id: uuidv4(),
    href: "#",
    label: "twitter",
    icon: <Twitter className="size-5" />,
  },
  {
    id: uuidv4(),
    href: "#",
    label: "instagram",
    icon: <Instagram className="size-5" />,
  },
  {
    id: uuidv4(),
    href: "#",
    label: "linkedin",
    icon: <Linkedin className="size-5" />,
  },
];

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("", className)}>
      <Container>
        <div className="flex items-center gap-4 pt-20 pb-4">
          <div className="w-full max-w-3xs">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo.webp"
                alt="logo"
                width={146}
                height={62}
              />
            </Link>
          </div>

          <div className="flex-1">
            <nav className="grid grid-cols-3 gap-4">
              {menu.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="whitespace-nowrap hover:text-primary"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="text-right">
            <Headline level={5} className="mb-4">
              Follow Us
            </Headline>

            <div className="flex flex-wrap justify-end gap-4">
              {socialMenu.map((item) => {
                return (
                  <Link
                    target="_blank"
                    key={item.id}
                    href={item.href}
                    className="bg-secondary rounded-full size-8 flex items-center justify-center text-background hover:bg-primary transition-colors"
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs py-4">
          <p>&copy; Created by</p>
          <p>All rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
