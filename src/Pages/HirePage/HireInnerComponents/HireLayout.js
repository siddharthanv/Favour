import { Box, Button, Card, CardContent, Container, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import HirePerson from "./HirePerson";

export default function HireLayout() {
  return (
    <Grid container spacing={2}>
      <Grid item lg={6} sx={{ mt: "50px" }}>
        <Container maxWidth="xs">
          <HirePerson />
          <Card sx={{ mt: "30px" }}>
            <CardContent>
              <Typography sx={{ fontWeight: 600 }}>Check Availability with Pincode</Typography>
              <Box display="flex">
                <TextField fullWidth label="Enter your pincode" size="small" sx={{ mt: "20px" }} />
                <Button size="small" variant="contained" sx={{ textTransform: "none", m: "20px 0px 0px 20px" }}>
                  Check
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Grid>
      <Divider orientation="vertical" flexItem style={{ marginRight: "-1px", height: "100vh" }} />
      <Grid item lg={6} sx={{ mt: "50px" }}>
        <Container maxWidth="xs">
          <Stack spacing={2}>
            <Typography sx={{ fontWeight: 600, textAlign: "center" }}>Address</Typography>
            <TextField fullWidth label="House No./Flat Name/Street Name" />
            <TextField fullWidth label="Area Name" />
            <TextField fullWidth label="City Name" />
            <TextField fullWidth label="Pincode" />
            <Typography sx={{ fontWeight: 600, textAlign: "center", pt: "15px" }}>Schedule</Typography>
            <TextField fullWidth label="Date" />
            <TextField fullWidth label="Time" />
            <Typography sx={{ fontWeight: 600, textAlign: "center", pt: "15px" }}>Payment Options</Typography>
            <TextField fullWidth label="Payment Mode" />
            <Button variant="contained" fullWidth sx={{ textTransform: "none", mt: "40px !important" }}>
              Hire Now/ Book Appointment
            </Button>
          </Stack>
        </Container>
      </Grid>
    </Grid>
  );
}
