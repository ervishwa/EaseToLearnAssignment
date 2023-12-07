import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function DetailCOllectionForm() {
  const initialValues = {
    name: "",
    email: "",
    dob: "",
    contactNumber: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    dob: Yup.date(),
    contactNumber: Yup.string(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <div className="w-3/4 px-24 pt-12 pb-16 rounded-b-lg shadow-lg">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="text-gray-600">
            1. Name*
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Enter a valid salary in numbers e.g. 50,000/-"
            className="w-full h-9 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-xs text-red-500">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="text-gray-600">
            2. Email*
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full h-9 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-xs text-red-500">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="dob" className="text-gray-600">
            3. Date of Birth
          </label>
          <br />
          <input
            type="date"
            id="dob"
            name="dob"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
            className="w-1/3 h-9 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          {formik.touched.dob && formik.errors.dob && (
            <div className="text-xs text-red-500">{formik.errors.dob}</div>
          )}
        </div>

        <div>
          <label htmlFor="contactNumber" className="text-gray-600">
            4. Contact no
          </label>
          <br />
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactNumber}
            placeholder="Enter your 10 digit contact number"
            className="w-full h-9 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          {formik.touched.contactNumber && formik.errors.contactNumber && (
            <div className="text-xs text-red-500">
              {formik.errors.contactNumber}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
