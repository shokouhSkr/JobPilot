import React from "react";
import { Snackbar, Alert, Slide } from "@mui/material";

const TransitionDown = (props) => {
  return <Slide {...props} direction="down" />;
};

const AlertMsg = ({ openAlert, setOpenAlert, message, type }) => {
  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={2500}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      TransitionComponent={TransitionDown}
      onClose={() => setOpenAlert(false)}
    >
      <Alert severity={type} className="w-80">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertMsg;
