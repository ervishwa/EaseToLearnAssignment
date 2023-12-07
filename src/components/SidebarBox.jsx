import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function SidebarBox({ route, heading, content }) {
  const [isActiveLink, setIsActiveLink] = useState(false);

  const setActiveRoute = (isActive) => {
    setIsActiveLink(isActive);
    return "";
  };

  return (
    <NavLink
      to={`/${route}`}
      className={({ isActive }) => setActiveRoute(isActive)}
    >
      <div
        className={`${
          isActiveLink && "shadow-xl border-blue-300"
        } border border-gray-400 rounded-lg bg-white px-6 py-4 flex items-center gap-4 cursor-pointer`}
      >
        <div
          className={` ${
            isActiveLink ? "bg-blue-400" : "bg-gray-300"
          } h-[60px] w-[70px] rounded `}
        ></div>
        <div className="flex gap-1 flex-col w-80 h-16">
          <p className="font-normal text-base">{heading}</p>
          <p className="text-gray-400 text-xs font-normal">{content}</p>
        </div>
      </div>
    </NavLink>
  );
}
