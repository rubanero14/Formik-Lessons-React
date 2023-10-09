import React from "react";
import { useFormik } from "formik";

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => console.log(values),
    validate: (values) => {
      // values.name, values.email, values.channel
      // errors.name, errors.email, errors.channel
      // Eg: errors.name = 'Name is required';
      const errors = {};
      if (!values.name) {
        errors.name = "Name Required";
      }

      if (!values.email) {
        errors.email = "Email Required";
      } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(values.email) // regex algo to validate correct email format
      ) {
        errors.email = "Invalid email format";
      }
      if (!values.channel) {
        errors.channel = "Channel Required";
      }
      // Finally returning errors as object of the form field
      return errors;
    },
  });

  console.log("formik obj: ", formik);
  console.log("formik values: ", formik.values);
  console.log("formik errors: ", formik.errors);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="error">Invalid Name</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="error">Invalid Email</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? (
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
      </form>
    </>
  );
};
export default YoutubeForm;
