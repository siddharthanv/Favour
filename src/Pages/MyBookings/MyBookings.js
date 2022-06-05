import { Card, CardHeader, Container, Avatar, IconButton, Grid, Divider, CardContent, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Navbar from "../HomePage/HomePageInnerComponents/Navbar";
import Footer from "../../Common/Footer/Footer";

export default function MyBookings() {
  return (
    <div>
      <Navbar />
      <Container>
        <Grid container spacing={2} sx={{ mt: "50px", mb: "70px" }}>
          {[...new Array(12)].map((_item, index) => (
            <Grid item lg={3} key={index}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#000" }} aria-label="recipe">
                      S
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Peter"
                  subheader="Booking ID"
                />
                <Divider variant="fullWidth" />
                <CardContent>
                  <Typography>Name: John</Typography>
                  <Typography>Address: 3A St Marys Road, US </Typography>
                  <Typography>Date: 13/06/2022</Typography>
                  <Typography>Time: 1:00 PM</Typography>
                  <Typography>Payment Mode: COD</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
