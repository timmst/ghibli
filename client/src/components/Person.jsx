import { Modal, Box, Typography, Button, Card as MuiCard } from "@mui/material";
import * as React from "react";

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
  // const [open, setOpen] = React.useState(false);
  console.log("props", props);
  const handleOpen = () => props.closeModal(true);
  const handleClose = () => props.closeModal(false);
  return (
    <Modal
      // open={props.closeModal}
      open={props.modalState}
      // open={handleOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default Person;
