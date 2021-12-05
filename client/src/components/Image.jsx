import { Paper } from "@mui/material";
import ghibliLogo from "../assets/ghibli-logo.jpg";

const Image = () => {
  return (
    <Paper sx={{ mb: 2 }}>
      <img alt="missing" src={ghibliLogo} width="400px" />
    </Paper>
  );
};

export default Image;
