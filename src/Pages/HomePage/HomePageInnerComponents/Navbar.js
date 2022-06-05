import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../../Common/Logo/Logo";
import { Link } from "react-router-dom";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PersonIcon from "@mui/icons-material/Person";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import HomeIcon from "@mui/icons-material/Home";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navbarOptions = [
    {
      id: "0",
      name: "Home",
      linkURL: "/",
      icon: <HomeIcon />,
    },
    {
      id: "1",
      name: "Services",
      linkURL: "/service-list",
      icon: <HomeRepairServiceIcon />,
    },
    {
      id: "2",
      name: "Service Persons",
      linkURL: "/service-person-list",
      icon: <PersonIcon />,
    },
    {
      id: "3",
      name: "My Bookings",
      linkURL: "/my-bookings",
      icon: <AppShortcutIcon />,
    },
    {
      id: "4",
      name: "My Bookings (Partners)",
      linkURL: "/partner-bookings",
      icon: <LaptopChromebookIcon />,
    },
  ];

  const navbar1Options = [
    {
      id: "1",
      name: "Become a Partner",
      linkURL: "/signup-partner",
      icon: <PersonIcon />,
    },
    {
      id: "2",
      name: "Signin/ Signup",
      linkURL: "/signin",
      icon: <VpnKeyIcon />,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ bgcolor: "#fff", color: "#000", py: "10px" }}>
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box display="flex" flexGrow={1}>
            <Logo />
          </Box>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button variant="contained" size="small">
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navbarOptions.map((opt, index) => (
            <Link to={opt.linkURL} key={opt.id} style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{opt.icon}</ListItemIcon>
                  <ListItemText primary={opt.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {navbar1Options.map((opt, index) => (
            <Link to={opt.linkURL} key={opt.id} style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{opt.icon}</ListItemIcon>
                  <ListItemText primary={opt.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Main open={open} sx={{ pl: "0px !important", pt: "0px !important" }}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
