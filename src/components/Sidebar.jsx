import React from "react";
import { SidebarBox } from "./SidebarBox";

export function Sidebar() {
  const routes = [
    {
      route: "",
      heading: "Details Collection",
      content:
        "Collect information from Candidates on their education, work experience, contact no,etc",
    },
    {
      route: "documents",
      heading: "Document Collection",
      content:
        "Save time and efforts: Explore this template to find a set of questions required for document collection",
    },
    {
      route: "statement",
      heading: "Statement of Purpose",
      content:
        "Start creating a new form with the wide options of fields available",
    },
    {
      route: "interview",
      heading: "Interview Availability",
      content:
        "Start creating a new form with the wide options of fields available",
    },
  ];

  return (
    <div className="flex flex-col w-full px-16 py-7 sticky left-0 top-16 overflow-hidden">
      <div className="mb-7">
        <SidebarBox
          route={"building"}
          heading={"New Form"}
          content={
            "Start creating a new form with the wide options of fields available"
          }
        />
      </div>
      <p className="text-sm font-normal text-gray-500 mb-4">
        Explore the following Templates:
      </p>
      <div className="flex flex-col gap-3">
        {routes.map((currentRoute, id) => (
          <SidebarBox
            key={id}
            route={currentRoute.route}
            heading={currentRoute.heading}
            content={currentRoute.content}
          />
        ))}
      </div>
    </div>
  );
}
