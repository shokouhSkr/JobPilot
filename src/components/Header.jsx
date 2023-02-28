import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { Button, Menu, MenuItem, Fade, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/sidebar/sidebarSlice";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {
    user: { name },
  } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    if (e.target.textContent === "Logout") dispatch(logoutUser());
    setAnchorEl(null);
  };

  return (
    <header className="mb-14 flex h-16 items-end justify-end px-1 text-2xl text-main md:ml-80">
      <button
        type="button"
        onClick={() => dispatch(toggleSidebar())}
        className="py-1.5 pl-5 md:hidden"
      >
        <GrMenu />
      </button>
      <p className="w-full px-3 pl-8 text-center md:pl-14">Dashboard</p>
      <div>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <div className="flex items-center gap-2">
            <Avatar src="/broken-image.jpg" className="h-8 w-8 bg-primary" />
            <span className="text-lg">{name}</span>
          </div>
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
          <MenuItem onClick={handleClose}>
            <Link to="/profile">Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
