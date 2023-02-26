import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { Button, Menu, MenuItem, Fade, Avatar } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="flex h-20 items-center justify-end px-1 pt-4 text-2xl text-main md:ml-80">
      <p className="w-full px-3 md:text-center">Dashboard</p>
      <span className="py-1.5 px-2 md:hidden">
        <GrMenu />
      </span>
      <div>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar src="/broken-image.jpg" className="h-8 w-8 bg-primary" />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
