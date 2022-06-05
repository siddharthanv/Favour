import { Button, Container, Stack, Typography, TextField, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { Link } from "react-router-dom";
import LogoOnlyLayout from "../../Common/Layout/LogoOnlyLayout";

export default function Signin() {
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
          <TextField fullWidth variant="outlined" label="Mobile Number" />
          <TextField fullWidth variant="outlined" label="Password" />
          <Button fullWidth variant="contained" justifyContent="center" sx={{ pt: "20px" }}>
            Login
          </Button>
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
