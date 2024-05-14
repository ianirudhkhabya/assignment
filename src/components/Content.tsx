"use client";

import React, { useContext } from "react";

import { SidebarContext } from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

type ContentProps = {
  children: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ children }) => {
  const { isCollapsed } = useContext(SidebarContext);

  return (
    <main
      className={`flex-col flex-grow w-full px-1 ${
        isCollapsed ? "bg-gray-100" : "bg-gray-200"
      } transition-all`}
    >
      <Navbar />
      {children}
    </main>
  );
};

export default Content;
