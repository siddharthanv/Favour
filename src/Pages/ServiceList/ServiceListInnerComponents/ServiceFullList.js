import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import PlumbingOutlinedIcon from "@mui/icons-material/PlumbingOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import ElectricalServicesOutlinedIcon from "@mui/icons-material/ElectricalServicesOutlined";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { Link } from "react-router-dom";

export default function Services() {
  const popularServices = [
    { id: "1", name: "Medicine", icon: <MedicationOutlinedIcon sx={{ fontSize: "70px", pb: "10px" }} /> },
    { id: "2", name: "Electrical", icon: <ElectricalServicesOutlinedIcon sx={{ fontSize: "70px", pb: "10px" }} /> },
    { id: "3", name: "Plumbing", icon: <PlumbingOutlinedIcon sx={{ fontSize: "70px", pb: "10px" }} /> },
    { id: "4", name: "Airconditioner", icon: <AcUnitOutlinedIcon sx={{ fontSize: "70px", pb: "10px" }} /> },
    { id: "5", name: "Saloon", icon: <ContentCutOutlinedIcon sx={{ fontSize: "70px", pb: "10px" }} /> },
    { id: "6", name: "Painting", icon: <ImagesearchRollerOutlinedIcon sx={{ fontSize: "70px", pb: "10px" }} /> },
  ];
  return (
    <Stack sx={{ my: "2rem" }}>
      <Container>
        <Typography variant="h5" sx={{ fontWeight: 700, mt: "20px", mb: "30px" }} gutterBottom>
          Services List
        </Typography>
        <Grid container spacing={4}>
          {popularServices.map((ser, index) => (
            <Grid item xs={4} sm={3} md={2.4} lg={2} key={index}>
              <Link to="/service-person-list" style={{ textDecoration: "none", color: "#000" }}>
                <div
                  style={{
                    backgroundColor: "#e1e8ee",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <span>{ser.icon}</span>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {ser.name}
                    </Typography>
                  </Box>
                </div>
              </Link>
            </Grid>
          ))}
          {[...new Array(12)].map((_ar, index) => (
            <Grid item xs={4} sm={3} md={2.4} lg={2}>
              <Link to="/service-person-list" style={{ textDecoration: "none", color: "#000" }}>
                <div
                  style={{
                    backgroundColor: "#e1e8ee",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <span>
                      <HomeRepairServiceIcon sx={{ fontSize: "70px", pb: "10px" }} />
                    </span>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Service {index + 7}
                    </Typography>
                  </Box>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}
