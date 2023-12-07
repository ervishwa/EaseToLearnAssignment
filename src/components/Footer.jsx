import React from "react";

export function Footer() {
  return (
    <div className="bg-white border-t border-t-gray-300 h-16 flex items-center z-10 sticky bottom-0">
      <button className="absolute right-5 px-6 py-1 bg-blue-500 text-xs text-white rounded cursor-pointer">
        NEXT
      </button>
    </div>
  );
}
