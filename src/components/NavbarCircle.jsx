import React from "react";

export function NavbarCircle({ blue, text }) {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={`h-5 w-5 border border-gray-300 rounded-full ${
          blue ? "bg-blue-500" : "bg-white"
        }`}
      ></div>
      <p>{text}</p>
    </div>
  );
}
