import React from "react";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";
import FormHeader from "./FormHeader";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-1/3">
          <Sidebar />
        </div>
        <div className="w-2/3 bg-gray-100 flex flex-col justify-center items-center">
          <FormHeader />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
