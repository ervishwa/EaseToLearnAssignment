import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function SidebarBox({ route }) {
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
        } border border-gray-500 rounded-lg bg-white px-6 py-4 flex items-center gap-4 cursor-pointer`}
      >
        <div
          className={` ${
            isActiveLink ? "bg-blue-400" : "bg-gray-300"
          } h-[70px] w-[70px] rounded `}
        ></div>
        <div className="flex flex-col gap-1">
          <p className="font-normal text-base">New Form</p>
          <p className="text-gray-400 text-xs font-normal">
            Start creating a new form with the wide options of fields available
          </p>
        </div>
      </div>
    </NavLink>
  );
}
