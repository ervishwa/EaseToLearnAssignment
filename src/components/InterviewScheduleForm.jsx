import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Dropdown = ({ id, name, options, value, onChange, onBlur }) => (
  <select
    id={id}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    className="w-full h-10 rounded-md p-2 border border-gray-400 text-gray-400"
  >
    <option value="">Select</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export function InterviewScheduleForm() {
  const initialValues = {
    email: "",
    location: "",
    interviewDate: "",
    interviewTime: "",
    timeZone: "temp",
    interviewMedium: "temp",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    location: Yup.string().required("Location is required"),
    interviewDate: Yup.date().required("Interview Date is required"),
    interviewTime: Yup.string().required("Interview Time is required"),
    timeZone: Yup.string().required("Time Zone is required"),
    interviewMedium: Yup.string().required("Interview Medium is required"),
  });

  const timeZones = [
    { value: "temp", label: "Search or Select a time zone from below" },
    { value: "UTC", label: "Coordinated Universal Time (UTC)" },
    { value: "GMT", label: "Greenwich Mean Time (GMT)" },
    { value: "EST", label: "Eastern Standard Time (EST)" },
    { value: "CST", label: "Central Standard Time (CST)" },
    { value: "PST", label: "Pacific Standard Time (PST)" },
  ];

  const interviewMediumOptions = [
    { value: "temp", label: "Search or Select a time zone from below" },
    { value: "In-person", label: "In-person" },
    { value: "Phone", label: "Phone" },
    { value: "Video", label: "Video" },
  ];

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="w-3/4 px-24 pt-8 pb-8 rounded-b-lg shadow-lg h-[400px] overflow-scroll">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-600">
            1. Email*
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Example - userid@gmail.com"
            className="w-full h-10 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-xs text-red-500">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="text-gray-600">
            2. Location
          </label>
          <br />
          <input
            type="text"
            id="location"
            name="location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
            placeholder="Search or enter Your Location"
            className="w-full h-10 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          {formik.touched.location && formik.errors.location && (
            <div className="text-xs text-red-500">{formik.errors.location}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="interviewDate" className="text-gray-600">
            3. Interview Date
          </label>
          <br />
          <input
            type="date"
            id="interviewDate"
            name="interviewDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.interviewDate}
            className="w-full h-10 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          {formik.touched.interviewDate && formik.errors.interviewDate && (
            <div className="text-xs text-red-500">
              {formik.errors.interviewDate}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="interviewTime" className="text-gray-600">
            4. Interview Time
          </label>
          <br />
          <input
            type="time"
            id="interviewTime"
            name="interviewTime"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.interviewTime}
            placeholder="12:00"
            className="w-2/5 h-10 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          {formik.touched.interviewTime && formik.errors.interviewTime && (
            <div className="text-xs text-red-500">
              {formik.errors.interviewTime}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="timeZone" className="text-gray-600">
            5. Time Zone
          </label>
          <br />
          <Dropdown
            id="timeZone"
            name="timeZone"
            options={timeZones}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.timeZone}
          />
          {formik.touched.timeZone && formik.errors.timeZone && (
            <div className="text-xs text-red-500">{formik.errors.timeZone}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="interviewMedium" className="text-gray-600">
            6. Interview Medium
          </label>
          <br />
          <Dropdown
            id="interviewMedium"
            name="interviewMedium"
            options={interviewMediumOptions}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.interviewMedium}
          />
          {formik.touched.interviewMedium && formik.errors.interviewMedium && (
            <div className="text-xs text-red-500">
              {formik.errors.interviewMedium}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
