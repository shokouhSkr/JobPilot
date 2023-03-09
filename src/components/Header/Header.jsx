import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineSun, HiOutlineMoon, HiMenuAlt3 } from "react-icons/hi";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice";

const Header = ({ page }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {
    user: { name },
  } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <header className="flex items-center justify-between p-10 md:ml-64 md:p-12">
      <div>
        <h1 className="mb-1 text-2xl font-semibold text-primaryTxt">{page}</h1>
        <p className="text-sm text-secondaryTxt">Hello {name}, Welcome back!</p>
      </div>

      <div className="flex gap-3 text-xl text-primaryBg">
        <button
          type="button"
          className="grid place-content-center rounded-md bg-screen p-2.5 shadow-sm"
        >
          <HiOutlineMoon />
        </button>
        <button
          type="button"
          onClick={() => dispatch(toggleSidebar())}
          className="grid place-content-center rounded-md bg-screen p-2 shadow-sm md:hidden"
        >
          <HiMenuAlt3 />
        </button>
      </div>
    </header>
  );
};

export default Header;
