import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { Button, Menu, MenuItem, Fade, Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebar/sidebarSlice";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="flex h-16 items-end justify-end px-1 text-2xl text-main md:ml-80">
      <button
        type="button"
        onClick={() => dispatch(toggleSidebar())}
        className="py-1.5 px-2.5 md:hidden"
      >
        <GrMenu />
      </button>
      <p className="w-full px-3 text-center">Dashboard</p>
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
