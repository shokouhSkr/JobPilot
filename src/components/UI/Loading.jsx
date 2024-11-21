import { BiLoader } from "react-icons/bi";
import { useSelector } from "react-redux";

const Loading = ({ center }) => {
  const { isDarkMode } = useSelector((store) => store.user);

  return (
    <div
      className={`${
        isDarkMode ? "text-screen" : "text-primaryTxt"
      } mx-auto flex h-screen justify-center ${center && "items-center"}`}
    >
      <BiLoader className="animate-spin text-4xl" />
    </div>
  );
};

export default Loading;
