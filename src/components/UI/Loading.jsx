import { BiLoader } from "react-icons/bi";
import { useSelector } from "react-redux";

const Loading = () => {
  const { isDarkMode } = useSelector((store) => store.user);

  return (
    <div
      className={`${
        isDarkMode ? "text-screen" : "text-primaryTxt"
      } mx-auto flex h-screen justify-center pt-8`}
    >
      <BiLoader className="animate-spin text-4xl" />
    </div>
  );
};

export default Loading;
