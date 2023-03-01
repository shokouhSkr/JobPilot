import { BiLoader } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="grid h-[calc(100vh-150px)] place-items-center">
      <BiLoader className="animate-spin text-5xl" />
    </div>
  );
};

export default Loading;
