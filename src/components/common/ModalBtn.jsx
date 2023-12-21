import {Slide , Modal, Button,Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import Register from './Register'

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const ModalBtn = forwardRef(({btnName,children},ref) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "#fff",
        border: "2px solid #000",
        boxShadow: 24,
        p: 1,
      };

  return (
    <>
      <Button onClick={handleOpen}>{btnName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </>
  );
});

export default ModalBtn;
