"use client";

import React, { useContext } from "react";

import Sidebar, { SidebarContext } from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";

const Home = () => {
  return (
    <Content>
      <div className="flex-grow">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="text-gray-600">Welcome to the home page</p>
      </div>
    </Content>
  );
};

export default Home;
