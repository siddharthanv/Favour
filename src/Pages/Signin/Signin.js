import * as Yup from "yup";
import { Button, Container, Stack, Typography, TextField, Box, InputAdornment, IconButton } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoOnlyLayout from "../../Common/Layout/LogoOnlyLayout";
import { Form, FormikProvider, useFormik } from "formik";
import axiosIn from "../../utils/apiBaseUrl/axiosApi";
import Iconify from "../../Components/Iconify";

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const LoginSchema = Yup.object().shape({
    mobileNumber: Yup.string().length(10, "Mobile Number should be 10 digit").required("Mobile Number is required"),
    password: Yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const loginData = {
        mobileNumber: values.mobileNumber,
        password: values.password,
      };

      await axiosIn
        .post("/auth/signin", loginData)
        .then((res) => {
          localStorage.setItem("data", JSON.stringify(res.data));
          navigate("/");
        })
        .catch((err) => setErrorMessage(err.response.data.message));
    },
  });

  const { handleSubmit, getFieldProps, errors, touched, isSubmitting } = formik;

  return (
    <Stack>
      <LogoOnlyLayout />
      <Container maxWidth="xs" sx={{ height: "90vh" }}>
        <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
          <Box display="flex" justifyContent="flex-start" sx={{ width: "100%" }}>
            <Box>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button sx={{ textTransform: "none" }} startIcon={<ArrowBackIcon />}>
                  back
                </Button>
              </Link>
              <Typography variant="h5" sx={{ mb: "20px" }}>
                Login to your Account
              </Typography>
            </Box>
          </Box>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  type="text"
                  label="Mobile Number"
                  {...getFieldProps("mobileNumber")}
                  error={Boolean(touched.mobileNumber && errors.mobileNumber)}
                  helperText={touched.mobileNumber && errors.mobileNumber}
                />
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handlePassword} edge="end">
                          <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {errorMessage && (
                  <Typography color="red">
                    {errorMessage === "Internal server error" ? "Please check your login credentials" : errorMessage}
                  </Typography>
                )}
                <LoadingButton fullWidth type="submit" variant="contained" size="large" loading={isSubmitting}>
                  Login
                </LoadingButton>
              </Stack>
            </Form>
          </FormikProvider>
          <Stack direction="row" alignItems="center" sx={{ pt: "20px" }}>
            <Typography textAlign="center">Need an account?</Typography>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button sx={{ p: "0px", textTransform: "none" }}>Signup</Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
