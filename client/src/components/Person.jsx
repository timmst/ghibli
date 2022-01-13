import { Modal, Box, Typography, Paper } from "@mui/material";
import * as React from "react";
import { useFetch } from "../utils/useFetch";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Person = (props) => {
  console.log("props", props);
  const handleClose = () => props.closeModal(false);
  const movie = useFetch(props.row.films[0]);
  console.log("movie", movie);
  return (
    <Modal
      open={props.modalState}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          textAlign={"center"}
          sx={{
            fontWeight: "bold",
            fontSize: "20pt",
            fontFamily: "Rubik",
          }}
        >
          {props.row.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {/* {movie.response ? movie.response.title : "movie unavailable"} */}
          {movie.response && (
            <Paper
              component={"span"}
              variant={"body2"}
              sx={{
                margin: "1rem auto",
                boxShadow: "none",
              }}
            >
              <img alt="missing" src={movie.response.image} width="400px" />
            </Paper>
          )}
        </Typography>
      </Box>
    </Modal>
  );
};

export default Person;
