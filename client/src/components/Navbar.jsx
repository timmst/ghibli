import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#2A3942" }}>
        <Toolbar>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              color: "#FFFFFF",
              fontSize: 20,
              fontFamily: "Roboto",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/people"
            sx={{
              color: "#FFFFFF",
              ml: 5,
              fontSize: 20,
              fontFamily: "Roboto",
              textDecoration: "none",
            }}
          >
            People
          </Link>
          <Link
            component={RouterLink}
            to="/locations"
            sx={{
              color: "#FFFFFF",
              ml: 5,
              fontSize: 20,
              fontFamily: "Roboto",
              textDecoration: "none",
            }}
          >
            Locations
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
