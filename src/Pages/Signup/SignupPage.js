import { Button, Container, Stack, Typography, TextField, Box, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { Link } from "react-router-dom";
import LogoOnlyLayout from "../../Common/Layout/LogoOnlyLayout";

export default function Signup() {
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
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <TextField fullWidth variant="outlined" label="First Name" />
            </Grid>
            <Grid item lg={6}>
              <TextField fullWidth variant="outlined" label="Last Name" />{" "}
            </Grid>
            <Grid item lg={6}>
              <TextField fullWidth variant="outlined" label="Gender" />
            </Grid>
            <Grid item lg={6}>
              <TextField fullWidth variant="outlined" label="Mobile Number" />
            </Grid>
            <Grid item lg={12}>
              <TextField fullWidth variant="outlined" label="Email" />
            </Grid>
            <Grid item lg={6}>
              <TextField fullWidth variant="outlined" label="New Password" />
            </Grid>
            <Grid item lg={6}>
              <TextField fullWidth variant="outlined" label="Confirm Password" />
            </Grid>
            <Grid item lg={12}>
              <Container maxWidth="xs">
                <Button fullWidth size="large" variant="contained" justifyContent="center" sx={{ mt: "20px" }}>
                  Signup
                </Button>
              </Container>
            </Grid>
          </Grid>

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
