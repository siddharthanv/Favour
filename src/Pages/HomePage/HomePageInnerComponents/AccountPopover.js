import { useRef, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  MenuItem,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
// components
import MenuPopover from "./MenuPopover";
import IconButtonAnimate from "./IconButtonAnimate";
import Avatar from "./Avatar";

export default function AccountPopover() {
  const navigate = useNavigate();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("data");
    setOpenLogoutDialog(false);
    navigate("/");
    window.location.reload();
  };

  let loginButtonState = false;

  if (sessionStorage.getItem("tokenUser")) {
    loginButtonState = true;
  } else {
    loginButtonState = false;
  }

  return (
    <>
      <IconButtonAnimate
        ref={anchorRef}
        onClick={() => setOpen(true)}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar color="primary" sx={{ width: 36, height: 36 }}>
          {localStorage.getItem("data") && JSON.parse(localStorage.getItem("data")).firstName.charAt(0)}
        </Avatar>
      </IconButtonAnimate>
      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {localStorage.getItem("data") && JSON.parse(localStorage.getItem("data")).firstName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {localStorage.getItem("data") && JSON.parse(localStorage.getItem("data")).userType}
          </Typography>
        </Box>

        <Divider />
        <Stack spacing={0.5} sx={{ p: 1 }}>
          <MenuItem
            to="/"
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: "body2", py: 1, px: 2, borderRadius: 1 }}
          >
            Home
          </MenuItem>
        </Stack>
        <Divider />
        <MenuItem
          onClick={() => {
            setOpen(false);
            setOpenLogoutDialog(true);
          }}
          sx={{ typography: "body2", py: 1, px: 2, borderRadius: 1, m: 1 }}
        >
          Logout
        </MenuItem>
      </MenuPopover>
      <Dialog open={openLogoutDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Confirm Logout</DialogTitle>
        <DialogContent sx={{ mt: 2, pb: 0 }}>
          <DialogContentText id="alert-dialog-description">Are you sure you want to Logout?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenLogoutDialog(false)}>Cancel</Button>
          <Button onClick={handleLogout} variant="contained">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
