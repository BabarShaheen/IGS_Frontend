import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/logo.svg"; // use your actual path here

const pages = [
  "Partner",
  "Company",
  "Managed Services",
  "Industries",
  "Careers",
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          color: "#fff",
          backdropFilter: "blur(10px)",
          py: 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo and Text */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="IGS Logo"
              sx={{ height: 50, width: "auto" }}
            />
            <Box>
              <Typography variant="subtitle2" sx={{ lineHeight: 1.2 }}>
                RESHAPING
              </Typography>
              <Typography variant="subtitle2" sx={{ lineHeight: 1.2 }}>
                PROCUREMENT
              </Typography>
              <Typography variant="subtitle2" sx={{ lineHeight: 1.2 }}>
                THROUGH INNOVATION
              </Typography>
            </Box>
          </Box>

          {/* Navigation Menu */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={() => setDrawerOpen(false)}
                >
                  <List>
                    {pages.map((page) => (
                      <ListItem button key={page}>
                        <ListItemText primary={page} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {pages.map((page) => (
                <Button key={page} color="inherit">
                  {page}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
