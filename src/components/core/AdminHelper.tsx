import { User } from "@/payload-types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface AdminHelperProps {
  user: User & {
    collection: "users";
  };
}

const AdminHelper: FC<AdminHelperProps> = ({ user }) => {
  return (
    <div className="fixed top-0 left-0 bg-secondary p-4 z-[1000] text-secondary-foreground">
      <span className="font-bold">{user.email}</span> go to{" "}
      <Link
        target="_blank"
        href="/admin"
        className="font-bold inline-flex items-center gap-1"
      >
        admin
        <ExternalLink className="size-4" />
      </Link>
    </div>
  );
};

export default AdminHelper;
