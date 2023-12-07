import React from "react";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import DetailCOllectionForm from "./components/DetailCOllectionForm";
import FormHeader from "./components/FormHeader";
import { DocumentCollectionForm } from "./components/DocumentCollectionForm";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/3">
          <Sidebar />
        </div>
        <div className="w-2/3 bg-gray-100 flex flex-col justify-center items-center">
          <FormHeader />
          {/* <DetailCOllectionForm /> */}
          <DocumentCollectionForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
