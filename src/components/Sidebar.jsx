import { Link } from "react-router-dom";
import { Logo } from "../components";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 m-4 w-72 rounded-xl bg-yellow-200">
      <div className="p-5">
        <Logo sidebar />
      </div>
      <hr className="mb-4" />
      <ul>
        <li>
          <Link to="/" className="flex items-center justify-start gap-4"></Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
