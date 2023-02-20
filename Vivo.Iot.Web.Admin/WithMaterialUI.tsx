import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";

const validationSchema = yup.object(
  {
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    age: yup
      .number()
      .positive("Positive numbers only")
      .round("round")
      .integer()
      .lessThan(101)
      .moreThan(13),
    password: yup
      .string()
      .uppercase()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required")
      .test((obj, context) => {
        return context.parent.confirmPassword !== obj ? false : true
      }),
    confirmPassword: yup
      .string()
      .uppercase()
      .min(8, "Password should be of minimum 8 characters length")
  }
);

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      age: 0
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      validationSchema
        .validate(
          {
            email: formik.values.email,
            password: formik.values.password,
            age: formik.values.age.toString()
          },
          { strict: true }
        )
        .then(() => alert(JSON.stringify(values, null, 2)))
        .catch((err) => {
          console.log(err.errors)
          formik.setErrors(err.errors)
        })
      }
  });

  return (
    <div style={{ padding: "2rem" }}>
      <form onSubmit={formik.handleSubmit} style={{display:'flex',gap:'2rem'}}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          onWheel={(e:any) => e.target.blur()}
          fullWidth
          id="age"
          name="age"
          label="Age"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default WithMaterialUI