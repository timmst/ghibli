import { Paper } from "@mui/material";
import ghibliLogo from "../assets/logo.png";

const Image = () => {
  return (
    <Paper sx={{ maxWidth: "100%", margin: "1rem auto", boxShadow: "none" }}>
      <img alt="missing" src={ghibliLogo} width="400px" />
    </Paper>
  );
};

export default Image;
