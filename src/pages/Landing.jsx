import { Jobhunting } from "../assets";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import { useSelector } from "react-redux";

const Landing = () => {
  const { isDarkMode } = useSelector((store) => store.user);

  return (
    <main
      className={`${
        isDarkMode ? "bg-tertiaryBgDark" : "bg-screen"
      } grid h-screen grid-cols-2 grid-rows-[100px_minmax(650px,_1fr)] gap-x-8 overflow-hidden px-[5%] font-roboto text-primaryTxt md:px-[7%]`}
    >
      <nav className="col-span-full mt-2 flex items-center justify-start pt-6">
        <Logo />
      </nav>

      <div className="col-span-full flex h-[calc(100vh-100px)] flex-col justify-center md:col-span-1">
        <h1
          className={`${
            isDarkMode && "text-screen"
          } mb-8 text-[40px] font-extrabold capitalize leading-snug xs:text-5xl`}
        >
          Job{" "}
          <span className={`${isDarkMode && "text-primaryBgDark"} text-primaryBg`}>tracking</span>{" "}
          app
        </h1>
        <p className={`${isDarkMode && "text-screen"} mb-6 leading-relaxed`}>
          Job hunting can be a challenging and overwhelming experience, especially when you're
          applying for multiple positions. To help keep track of your applications, here we are to
          assist you in the process.
        </p>
        <div className="inline">
          <Button
            variant="contained"
            className={`${
              isDarkMode && "bg-primaryBgDark"
            } rounded-xl bg-primaryBg py-2 px-6 text-base font-normal xs:text-lg`}
          >
            <Link to="/register">Login/Register</Link>
          </Button>
        </div>
      </div>
      <div className="col-start-2 hidden h-[calc(100vh-100px)] items-center justify-end md:flex">
        <Jobhunting />
      </div>
    </main>
  );
};

export default Landing;
