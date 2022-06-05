import { Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={0.5} sx={{ my: "10px" }}>
        <Typography sx={{ fontWeight: "700" }}>Follow us on: </Typography>
        <IconButton size="large">
          <FacebookIcon />
        </IconButton>
        <IconButton size="large">
          <InstagramIcon />
        </IconButton>
        <IconButton size="large">
          <TwitterIcon />
        </IconButton>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="center" sx={{ my: "10px" }}>
        <Typography
          justifyContent="center"
          color="#666"
        >{`Copyright © 2022 by Favor. All Rights Reservered.`}</Typography>
      </Stack>
    </Stack>
  );
}
