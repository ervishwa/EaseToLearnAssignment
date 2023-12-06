import React from "react";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <div>
      <Navbar />

      <Sidebar />
      <Footer />
    </div>
  );
}
