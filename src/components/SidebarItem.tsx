"use client";

import React, { useContext } from "react";
import { IconType } from "react-icons";
import { SidebarContext } from "./Sidebar";
import Link from "next/link";

type SidebarItemProps = {
  icon: IconType;
  text?: string;
  href: string;
  active?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  text,
  href,
  active,
}) => {
  const { isCollapsed } = useContext(SidebarContext);

  return (
    <Link href={href}>
      <li
        className={`relative flex items-center py-2 px-3 my-1 rounded-lg cursor-pointer transition-colors ${
          active
            ? "bg-gradient-to-tr from-indigo-200"
            : "hover:bg-indigo-50 text-gray-600"
        } `}
      >
        <Icon size={20} />
        <span
          className={`overflow-hidden transition-all ${
            isCollapsed ? "w-0" : "w-52 ml-3"
          }`}
        >
          {text}
        </span>
      </li>
    </Link>
  );
};

export default SidebarItem;
