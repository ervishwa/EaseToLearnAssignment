import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export function StateMentOfPurposeForm() {
  const initialValues = {
    questionA: "",
    questionB: "",
    questionC: "",
  };

  const validationSchema = Yup.object({
    questionA: Yup.string().max(300).required("Answer is required"),
    questionB: Yup.string().max(300).required("Answer is required"),
    questionC: Yup.string().max(300).required("Answer is required"),
  });

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
    <div className="w-3/4 px-24 pt-12 pb-8 rounded-b-lg shadow-lg">
      <form onSubmit={formik.handleSubmit}>
        <div className="relative mb-3">
          <label htmlFor="questionA" className="text-gray-600">
            1. Tell me about a time you were asked to do something you had never
            done before. How did you react? What did you learn?
          </label>
          <br />
          <textarea
            id="questionA"
            name="questionA"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.questionA}
            placeholder="Enter a description for the long answer"
            className="w-full h-16 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          <p className="text-[10px] absolute right-0 text-gray-400">
            300 word limit
          </p>
          {formik.touched.questionA && formik.errors.questionA && (
            <div className="text-xs text-red-500">
              {formik.errors.questionA}
            </div>
          )}
        </div>

        <div className="relative mb-3">
          <label htmlFor="questionB" className="text-gray-600">
            2. Tell me about the last time something significant didn’t go
            according to plan at work. What was your role? What was the outcome?
          </label>
          <br />
          <textarea
            id="questionB"
            name="questionB"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter a description for the long answer"
            value={formik.values.questionB}
            className="w-full h-16 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          <p className="text-[10px] absolute right-0 text-gray-400">
            300 word limit
          </p>
          {formik.touched.questionB && formik.errors.questionB && (
            <div className="text-xs text-red-500">
              {formik.errors.questionB}
            </div>
          )}
        </div>

        <div className="relative mb-3">
          <label htmlFor="questionC" className="text-gray-600">
            3. What are the three things that are most important to you in a
            job?
          </label>
          <br />
          <textarea
            id="questionC"
            name="questionC"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter a description for the long answer"
            value={formik.values.questionC}
            className="w-full h-16 rounded-md p-2 border border-gray-400 text-gray-400"
          />
          <p className="text-[10px] absolute right-0 text-gray-400">
            300 word limit
          </p>
          {formik.touched.questionC && formik.errors.questionC && (
            <div className="text-xs text-red-500">
              {formik.errors.questionC}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
