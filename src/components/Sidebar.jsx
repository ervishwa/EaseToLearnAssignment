import React from "react";
import { SidebarBox } from "./SidebarBox";

export function Sidebar() {
  return (
    <div className="flex flex-col w-full px-4 py-4 sticky left-0 top-16">
      <div className="mb-7">
        <SidebarBox />
      </div>
      <p className="text-sm font-normal text-gray-500 mb-4">
        Explore the following Templates:
      </p>
      <div className="flex flex-col gap-3">
        <SidebarBox />
        <SidebarBox />
        <SidebarBox />
        <SidebarBox />
      </div>
    </div>
  );
}
