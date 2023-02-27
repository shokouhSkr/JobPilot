import { Link } from "react-router-dom";
import { NotFound } from "../assets";

const Error = () => {
  return (
    <div className="grid h-screen place-items-center bg-screen px-[5%] font-roboto text-main md:px-[7%]">
      <div className="flex flex-col items-center justify-center gap-16">
        <NotFound />
        <div className="text-center">
          <p className="mb-4 text-3xl">Page not found.</p>
          <p className="mb-2"> Please go back and try not to break anything else.</p>
          <Link to="/" className="capitalize underline">
            back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
