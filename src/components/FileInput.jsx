import React from "react";

const FileInput = ({ label, name, onChange, onBlur, value }) => {
  return (
    <div>
      <label htmlFor={name} className="text-base text-gray-600">
        {label}
      </label>
      <br />
      <input
        type="file"
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Attach file upto 5kb"
        className="text-sm text-gray-400 mb-2 cursor-pointer"
      />
    </div>
  );
};

export default FileInput;
