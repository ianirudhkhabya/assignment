"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between p-4 mb-2 bg-white shadow-sm rounded-md">
      <Link href="/">
        <h1 className="text-xl font-bold">Logo</h1>
      </Link>
      <div className="flex space-x-4">
        <button
          className="p-2 rounded-full bg-indigo-400 text-white hover:bg-indigo-600"
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </button>
        <button
          className="p-2 rounded-full bg-indigo-400 text-white hover:bg-indigo-600"
          onClick={() => router.push("/dashboard/1")}
        >
          <MdDashboard />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
