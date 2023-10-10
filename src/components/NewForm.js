import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const validationSchema = (_) =>
  Yup.object({
    name: Yup.string().required("Required Name!"),
    email: Yup.string()
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi)
      .email("Invalid Email!")
      .required("Required Email!"),
    channel: Yup.string().required("Required Channel!"),
  });

const onSubmit = (values) => console.log(values);

const NewForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <h1>New Youtube Form</h1>
      <br />
      <div className="form-wrapper">
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              {...formik.getFieldProps("name")} // replacing onChange, onBlur, value calls since the pattern is similar with single line of code - DRY principle
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="error">Invalid Name</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...formik.getFieldProps("email")} // replacing onChange, onBlur, value calls since the pattern is similar with single line of code - DRY principle
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="error">Invalid Email</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <input
              type="text"
              id="channel"
              name="channel"
              {...formik.getFieldProps("channel")} // replacing onChange, onBlur, value calls since the pattern is similar with single line of code - DRY principle
            />
            {formik.errors.channel && formik.touched.channel ? (
              <div className="error">Invalid Channel</div>
            ) : null}
          </div>
          <div className="form-control">
            <button type="submit">Submit</button>
            <button type="reset" onClick={formik.handleReset}>
              Reset
            </button>
          </div>
          <hr />
          <br />
          <code className="output">
            Name: {formik.values.name} <br />
            Email: {formik.values.email} <br />
            Channel: {formik.values.channel}
          </code>
        </Form>
      </div>
    </Formik>
  );
};
export default NewForm;
