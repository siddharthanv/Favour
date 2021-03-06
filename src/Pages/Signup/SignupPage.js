import * as Yup from "yup";
import { Button, Container, Stack, Typography, TextField, Box, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoOnlyLayout from "../../Common/Layout/LogoOnlyLayout";
import { Form, FormikProvider, useFormik } from "formik";
import axiosIn from "../../utils/apiBaseUrl/axiosApi";

export default function Signup() {
  const [errorMessage, setErrorMessage] = useState(null);
  const gender = [
    { id: 1, name: "Male", value: "MALE" },
    { id: 2, name: "Female", value: "FEMALE" },
    { id: 3, name: "Third Gender", value: "THIRDGENDER" },
  ];

  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(4, "Minimum 4 Characters")
      .max(20, "Maximum 20 characters")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(1, "Minimum 1 Characters")
      .max(20, "Maximum 20 characters")
      .required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    mobileNumber: Yup.string().length(10, "Mobile Number should be 10 digit").required("Mobile Number is required"),
    email: Yup.string().email("Must be a valid email").required("Email is required"),
    newPassword: Yup.string()
      .min(8, "Minimum 8 characters")
      .max(32, "Maximum 32 charcaters")
      .matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Password must contains uppercase, lowercase and special character"
      )
      .required("New Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      mobileNumber: "",
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const signupData = {
        username: values.email,
        password: values.newPassword,
        firstName: values.firstName,
        lastName: values.lastName,
        gender: values.gender,
        mobileNumber: values.mobileNumber,
        userType: "Normal User",
        skillType: "NOTHING",
        experience: "0",
        aadhar: "000000000000",
        pan: "ABCDEFGH",
        userStatus: "ACTIVE",
        pincodeMapping: [],
      };

      await axiosIn
        .post("/auth/signup", signupData)
        .then((res) => {
          navigate("/signin");
          console.log(res);
        })
        .catch((err) =>
          err.response.data.statusCode === 500
            ? setErrorMessage("User Already Exist or Invalid Data")
            : setErrorMessage(err.response.data.message)
        );
    },
  });

  const { handleSubmit, getFieldProps, errors, touched, isSubmitting } = formik;

  return (
    <Stack>
      <LogoOnlyLayout />
      <Container maxWidth="md" sx={{ height: "90vh" }}>
        <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
          <Box display="flex" justifyContent="flex-start" sx={{ width: "100%" }}>
            <Box>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button sx={{ textTransform: "none" }} startIcon={<ArrowBackIcon />}>
                  back
                </Button>
              </Link>
              <Typography variant="h5" sx={{ mb: "50px" }}>
                Create an Account
              </Typography>
            </Box>
          </Box>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="First Name"
                    {...getFieldProps("firstName")}
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Last Name"
                    {...getFieldProps("lastName")}
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    select
                    fullWidth
                    label="Gender"
                    placeholder="Select Gender"
                    {...getFieldProps("gender")}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.gender && errors.gender)}
                    helperText={touched.gender && errors.gender}
                  >
                    <option value="" />
                    {gender.map((gen) => (
                      <option key={gen.id} value={gen.value}>
                        {gen.name}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Mobile Number"
                    {...getFieldProps("mobileNumber")}
                    error={Boolean(touched.mobileNumber && errors.mobileNumber)}
                    helperText={touched.mobileNumber && errors.mobileNumber}
                  />
                </Grid>
                <Grid item lg={12}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Email"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="New Password"
                    {...getFieldProps("newPassword")}
                    error={Boolean(touched.newPassword && errors.newPassword)}
                    helperText={touched.newPassword && errors.newPassword}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Confirm Password"
                    {...getFieldProps("confirmPassword")}
                    error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                  />
                </Grid>
                <Grid item lg={12}>
                  {errorMessage && <Typography color="red">{errorMessage}</Typography>}
                </Grid>
                <Grid item lg={12}>
                  <Container maxWidth="xs">
                    <LoadingButton
                      fullWidth
                      type="submit"
                      variant="contained"
                      justifyContent="center"
                      sx={{ mt: "20px" }}
                      size="large"
                      loading={isSubmitting}
                      onClick={handleSubmit}
                    >
                      Signup
                    </LoadingButton>
                  </Container>
                </Grid>
              </Grid>
            </Form>
          </FormikProvider>

          <Stack direction="row" alignItems="center" sx={{ pt: "20px" }}>
            <Typography textAlign="center">Already have an account?</Typography>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <Button sx={{ p: "0px", textTransform: "none" }}>Signin</Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
