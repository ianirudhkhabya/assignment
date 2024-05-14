"use client";

import { createContext, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { SiVlcmediaplayer } from "react-icons/si";

import SidebarItem from "./SidebarItem";

const routes = [
  { icon: SiVlcmediaplayer, text: "Player", href: "/player" },
  { icon: SiVlcmediaplayer, text: "Player", href: "/player/1" },
  { icon: SiVlcmediaplayer, text: "Player", href: "/player/2" },
];

export const SidebarContext = createContext({ isCollapsed: false });

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className="h-screen">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm ${
          isCollapsed ? "w-16" : "w-[250px]"
        }`}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://www.canterburypilgrimages.com/wp-content/uploads/2021/04/dummy-logo-5b.png"
            alt="Logo"
            className={`overflow-hidden transition-all ${
              isCollapsed ? "w-0" : "w-32"
            }`}
          />
          <button
            onClick={() => setIsCollapsed((current) => !current)}
            className="p-1.5 rounded-full bg-gray-50 hover:bg-gray-100"
          >
            {isCollapsed ? (
              <IoIosArrowDropright size={20} />
            ) : (
              <IoIosArrowDropleft size={20} />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ isCollapsed }}>
          <ul className="flex-1 px-3">
            {routes.map((route, index) => (
              <SidebarItem key={index} {...route} />
            ))}
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
};

export default Sidebar;
