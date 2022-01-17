import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#333333" }}>
        <Toolbar>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              color: "#FFFFFF",
              fontSize: 20,
              fontFamily: "Roboto",
              textDecoration: "none",
              boxShadow: "2px 4px 25px rgba(0, 0, 0, .1)",
              borderRadius: "12px",
              transition: "all .2s linear",
              "&:hover": {
                transform: "translate3D(0, -2px, 0)",
                boxShadow: "2px 8px 45px rgba(0, 0, 0, .15)",
              },
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
              boxShadow: "2px 4px 25px rgba(0, 0, 0, .1)",
              borderRadius: "12px",
              transition: "all .2s linear",
              "&:hover": {
                transform: "translate3D(0, -2px, 0)",
                boxShadow: "2px 8px 45px rgba(0, 0, 0, .15)",
              },
            }}
          >
            People
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
