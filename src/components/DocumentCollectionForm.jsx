import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FileInput from "./FileInput";

export function DocumentCollectionForm() {
  const initialValues = {
    class10Marksheet: null,
    class12Marksheet: null,
    graduationMarksheet: null,
    postGraduationMarksheet: null,
    resume: null,
    recommendationLetter: null,
    salarySlips: null,
    others: null,
  };

  const validationSchema = Yup.object({
    class10Marksheet: Yup.mixed().required("Class 10 Marksheet is required"),
    class12Marksheet: Yup.mixed().required("Class 12 Marksheet is required"),
    graduationMarksheet: Yup.mixed().required(
      "Graduation Marksheet is required"
    ),
    postGraduationMarksheet: Yup.mixed().required(
      "Post Graduation Marksheet is required"
    ),
    resume: Yup.mixed().required("Resume/CV is required"),
    recommendationLetter: Yup.mixed(),
    salarySlips: Yup.mixed(),
    others: Yup.mixed(),
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
    <div className="w-3/4 px-24 pt-12 pb-16 rounded-b-lg shadow-lg h-[400px] overflow-scroll">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <FileInput
            label="1. 10th Marksheet*"
            name="class10Marksheet"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.class10Marksheet}
          />
          {formik.touched.class10Marksheet &&
            formik.errors.class10Marksheet && (
              <div className="text-xs text-red-500">
                {formik.errors.class10Marksheet}
              </div>
            )}
        </div>

        <div>
          <FileInput
            label="2. 12th Marksheet*"
            name="class12Marksheet"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.class12Marksheet}
          />
          {formik.touched.class12Marksheet &&
            formik.errors.class12Marksheet && (
              <div className="text-xs text-red-500">
                {formik.errors.class12Marksheet}
              </div>
            )}
        </div>

        <div>
          <FileInput
            label="3. Graduation Marksheet*"
            name="graduationMarksheet"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.graduationMarksheet}
          />
          {formik.touched.graduationMarksheet &&
            formik.errors.graduationMarksheet && (
              <div className="text-xs text-red-500">
                {formik.errors.graduationMarksheet}
              </div>
            )}
        </div>
        <div>
          <FileInput
            label="4. Post Graduation Marksheet*"
            name="postGraduationMarksheet"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postGraduationMarksheet}
          />
          {formik.touched.graduationMarksheet &&
            formik.errors.graduationMarksheet && (
              <div className="text-xs text-red-500">
                {formik.errors.graduationMarksheet}
              </div>
            )}
        </div>

        <div>
          <FileInput
            label="5. Resume/CV*"
            name="resume"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.resume}
          />
          {formik.touched.resume && formik.errors.resume && (
            <div className="text-xs text-red-500">{formik.errors.resume}</div>
          )}
        </div>

        <div>
          <FileInput
            label="6. Recommendation Letter"
            name="recommendationLetter"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.recommendationLetter}
          />
          {formik.touched.recommendationLetter &&
            formik.errors.recommendationLetter && (
              <div className="text-xs text-red-500">
                {formik.errors.recommendationLetter}
              </div>
            )}
        </div>

        <div>
          <FileInput
            label="7. Salary Slips"
            name="salarySlips"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.salarySlips}
          />
          {formik.touched.salarySlips && formik.errors.salarySlips && (
            <div className="text-xs text-red-500">
              {formik.errors.salarySlips}
            </div>
          )}
        </div>

        <div>
          <FileInput
            label="8. Others(if any)"
            name="others"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.others}
          />
          {formik.touched.others && formik.errors.others && (
            <div className="text-xs text-red-500">{formik.errors.others}</div>
          )}
        </div>
      </form>
    </div>
  );
}
