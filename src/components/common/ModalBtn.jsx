import {Slide , Modal, Button,Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import Register from './Register'



const ModalBtn = forwardRef(({btnName,children},ref) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        backgroundColor:"#3678cc",
        color:"#fff",
        boxShadow: 24,
        p: 3,
        margin:"40px 0px"
      };

  return (
    <>
      <Button type="button"  onClick={handleOpen}>{btnName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        ref={ref}
        sx={{ overflowY: "auto",}}
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </>
  );
});

export default ModalBtn;
