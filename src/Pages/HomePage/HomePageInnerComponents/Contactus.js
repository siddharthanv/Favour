import { Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ContactusImage from "../../../images/Contactus.png";

export default function Contactus() {
  return (
    <div style={{ backgroundColor: "rgb(246 251 255)", padding: "20px 0px" }}>
      <Container sx={{ pb: "50px" }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mt: "20px", textAlign: "center" }} gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={2} display="flex" alignItems="center">
          <Grid item lg={6}>
            <img src={ContactusImage} alt="contact us" width="100%" />
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item lg={5}>
            <Stack spacing={4}>
              <TextField variant="outlined" label="Name" />
              <TextField variant="outlined" label="Contact Number" />
              <TextField multiline minRows="4" variant="outlined" label="Enter Your Message Here" />
              <Button variant="contained">Submit</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
