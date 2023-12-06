import React from "react";
import { NavbarCircle } from "./NavbarCircle";

export default function Navbar() {
  return (
    <div className=" bg-red-400 h-[68px] flex items-center justify-center relative z-10">
      <div className="flex gap-2 items-center relative">
        <NavbarCircle blue={true} text={"Form Selection"} />
        <span class="material-symbols-outlined absolute text-sm left-[1px]">
          done
        </span>
        <hr className="w-32 stroke-1 bg-[#c3c3c3]" />
        <NavbarCircle text={"Set up"} />
        <hr className="w-32 stroke-1 bg-[#c3c3c3]" />
        <NavbarCircle text={"Form Creation"} />
        <hr className="w-32 stroke-1 bg-[#c3c3c3]" />
        <NavbarCircle text={"Review"} />
      </div>
      <span class="material-symbols-outlined absolute right-8 text-xl cursor-pointer">
        close
      </span>
    </div>
  );
}
