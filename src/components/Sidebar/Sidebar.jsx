import { Logo, Logout, SidebarLink } from "..";
import { Links } from "../../utils/sidebarLinks";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../../features/sidebar/sidebarSlice";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.sidebar);
  const { isDarkMode } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <>
      {/* backdrop */}
      <div
        className={`${isSidebarOpen && "fixed top-0 left-0 z-40 h-screen w-full md:hidden"}`}
        onClick={() => dispatch(closeSidebar())}
      ></div>

      {/* overlay */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-80"
        } fixed left-0 top-0 bottom-0 z-50 w-64 ${
          isDarkMode ? "bg-primaryBgDark" : "bg-screen"
        } text-primaryTxt shadow-lg transition-transform duration-300 md:translate-x-0`}
      >
        <div className="p-4">
          <Logo sidebar />
        </div>

        <ul className="relative px-6">
          {Links.map((link) => (
            <SidebarLink key={link.id} {...link} />
          ))}
        </ul>

        <Logout />
      </aside>
    </>
  );
};

export default Sidebar;
