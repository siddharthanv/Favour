import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import WeDoImage from "../../../images/WeDo.png";

export default function ChoseUs() {
  return (
    <div style={{ backgroundColor: "rgb(246 251 255)", padding: "20px 0px", marginBottom: "50px" }}>
      <Container>
        <Typography variant="h5" sx={{ fontWeight: 700, mt: "20px", mb: "40px", textAlign: "center" }} gutterBottom>
          What we do?
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <img src={WeDoImage} alt="What we do?" width="80%" />
          </Grid>
          <Grid item lg={6}>
            <Typography sx={{ mb: "20px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
