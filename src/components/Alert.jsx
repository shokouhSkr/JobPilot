import React from "react";
import { Snackbar, Alert, Slide } from "@mui/material";

const TransitionDown = (props) => {
  return <Slide {...props} direction="down" />;
};

const AlertMsg = ({ openAlert, setOpenAlert, name }) => {
  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      TransitionComponent={TransitionDown}
      onClose={() => setOpenAlert(false)}
    >
      <Alert severity="success" className="w-80">
        Welcome, {name}!
      </Alert>
    </Snackbar>
  );
};

export default AlertMsg;
