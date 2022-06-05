import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../HomePage/HomePageInnerComponents/Navbar";
import ServicePersonCard from "./ServicePersonComponents/ServicePersonCard";

export default function ServicePerson() {
  return (
    <div>
      <Navbar />
      <Container sx={{ my: "50px" }}>
        <Stack direction="row" alignItems="center" sx={{ mb: "30px" }}>
          <Typography variant="h5" sx={{ fontWeight: 700, display: "flex", flexGrow: "1 " }} gutterBottom>
            Service Person List
          </Typography>
          <input
            type="text"
            placeholder="search"
            style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "5px", minWidth: "200px" }}
          />
        </Stack>
        <Grid container spacing={4}>
          {[...new Array(12)].map(() => (
            <Grid item lg={4}>
              <ServicePersonCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
