import React from "react";

export function SidebarBox() {
  return (
    <div className="border border-gray-500 rounded-lg bg-white px-6 py-4 flex items-center gap-4 cursor-pointer">
      <div className="h-[70px] w-[70px] rounded bg-gray-300"></div>
      <div className="flex flex-col gap-1">
        <p className="font-normal text-base">New Form</p>
        <p className="text-gray-400 text-xs font-normal">
          Start creating a new form with the wide options of fields available
        </p>
      </div>
    </div>
  );
}
