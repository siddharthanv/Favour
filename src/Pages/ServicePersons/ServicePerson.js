import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axiosIn from "../../utils/apiBaseUrl/axiosApi";
import Navbar from "../HomePage/HomePageInnerComponents/Navbar";
import ServicePersonCard from "./ServicePersonComponents/ServicePersonCard";

export default function ServicePerson() {
  const [servicePerson, setServicePerson] = useState([]);

  useEffect(() => {
    const getServicePerson = async () => {
      await axiosIn
        .get("auth/getServicePersonsList?userType=Service Person")
        .then((res) => setServicePerson(res.data))
        .catch((res) => console.log(res));
    };

    getServicePerson();
  }, []);
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
          {servicePerson.map((per, index) => (
            <Grid item lg={4} key={index}>
              <ServicePersonCard user={per} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
