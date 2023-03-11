import { BiLoader } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="mx-auto mt-4 flex h-[calc(100vh-150px)] justify-center text-primaryTxt dark:text-white">
      <BiLoader className="animate-spin text-4xl" />
    </div>
  );
};

export default Loading;
