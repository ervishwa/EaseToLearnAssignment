import React from "react";

export function Footer() {
  return (
    <div className="bg-red-400 h-16 flex items-center relative z-10">
      <button className="absolute right-5 px-6 py-1 bg-blue-500 text-xs text-white rounded cursor-pointer">
        NEXT
      </button>
    </div>
  );
}
