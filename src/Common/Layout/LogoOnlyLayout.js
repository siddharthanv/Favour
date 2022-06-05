import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../Logo/Logo";

export default function LogoOnlyLayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ m: "0px" }}>
        <Toolbar sx={{ bgcolor: "#fff", color: "#000", py: "10px" }}>
          <Logo />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
