/**
 * To use Formik components that greatly reduces the markup and validation logic for rendering, you need 4 Formik components
 * 1. Formik component - which acts as Form wrapper and also useFormik() configs combined and pass in relevant attributes, ie: onSubmit, initialValues, validationSchema
 *    and create the values of the attributes outside the main NewForm component as below.
 * 2. Form component - This component replaces the form component and acts as intermediary between Formik and Field components, it wires up relevant information and
 *    data based on user input
 * 3. Field component - This components replaces normal input element but retains its attribute, Formik does its value matching behind the scenes.
 * 4. ErrorMessage component - This component replaces conditionally rendered error message markup, and all it needs is attribute name's value to match the Field component
 *    its watching, Formik does all of the conditional and validation checking behind the scenes with values and errors objects.
 */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

let values = {};

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

const onSubmit = (_values) => {
  values = {};
  values = _values;
  console.log(values);
};

const NewForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="form-wrapper">
        <Form>
          <h1>New Form</h1>
          <br />
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" />
          </div>
          <div className="form-control">
            <button type="submit">Submit</button>
            {/* <button type="reset" onClick={formik.handleReset}>
              Reset
            </button> */}
          </div>
          <hr />
          <br />
          <code className="output">
            Name: {values.name} <br />
            Email: {values.email} <br />
            Channel: {values.channel}
          </code>
        </Form>
      </div>
    </Formik>
  );
};
export default NewForm;
