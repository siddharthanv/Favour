import { Box, Button, Card, CardContent, Container, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import HirePerson from "./HirePerson";
import axiosIn from "../../../utils/apiBaseUrl/axiosApi";

export default function HireLayout() {
  const [servicePerson, setServicePerson] = useState({});
  const [checkPincode, setCheckPincode] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const getServicePerson = async () => {
      await axiosIn
        .get("auth/getServicePersonsList?userType=Service Person")
        .then((res) => {
          const found = res.data.filter((res) => res.id === localStorage.getItem("currentId"));
          setServicePerson(found[0]);
        })
        .catch((res) => console.log(res));
    };

    getServicePerson();
  }, []);

  const checkAndChangeStatus = () => {
    setShowStatus(true);
  };

  return (
    <Grid container spacing={2}>
      <Grid item lg={6} sx={{ mt: "50px" }}>
        <Container maxWidth="xs">
          <HirePerson ser={servicePerson} />
          <Card sx={{ mt: "30px" }}>
            <CardContent>
              <Typography sx={{ fontWeight: 600 }}>Check Availability with Pincode</Typography>
              <Box display="flex">
                <TextField
                  fullWidth
                  label="Enter your pincode"
                  size="small"
                  sx={{ mt: "20px" }}
                  onChange={(e) => {
                    setShowStatus(false);
                    setCheckPincode(servicePerson.pincodeMapping.includes(e.target.value));
                  }}
                />
                <Button
                  size="small"
                  variant="contained"
                  onClick={checkAndChangeStatus}
                  sx={{ textTransform: "none", m: "20px 0px 0px 20px" }}
                >
                  Check
                </Button>
              </Box>
              {showStatus && (
                <Typography color={checkPincode ? "green" : "red"} sx={{ mt: "10px" }}>
                  {checkPincode ? "Available for your pincode" : "Not available for your pincode"}
                </Typography>
              )}
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
