import { Container } from "@mui/material";
import Navbar from "../HomePage/HomePageInnerComponents/Navbar";
import HireLayout from "./HireInnerComponents/HireLayout";

export default function Hire() {
  return (
    <div>
      <Navbar />
      <Container>
        <HireLayout />
      </Container>
    </div>
  );
}
