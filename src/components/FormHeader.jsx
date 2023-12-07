import React from "react";

export default function FormHeader() {
  return (
    <div className="w-3/4">
      <div>
        <p className="text-xl font-medium">Preview</p>
        <p className="text-xs font-normal">
          You will be able to customize the fields in the later stage
        </p>
      </div>
      <div className="bg-[#1A8FE6] bg-opacity-30 rounded-t-lg border pt-6 pr-24 pl-4 mt-2">
        <div className="mb-4">
          <div>
            <p className="text-xl font-medium">Name of the Enquiry Form</p>
            <p className="text-xs font-normal">
              One line description of the form
            </p>
          </div>
          <p className="text-xs font-normal text-gray-500 mt-5">
            Provide the following information to process your application
          </p>
        </div>
      </div>
    </div>
  );
}
