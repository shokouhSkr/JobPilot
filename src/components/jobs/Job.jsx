import { ImLocation, ImCalendar } from "react-icons/im";
import { RiSuitcase2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, setEditJob } from "../../features/job/jobSlice";
import moment from "moment";

const Job = ({ _id, position, company, jobLocation, jobType, createdAt, status }) => {
  const { isDarkMode } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMM Do, YY");

  return (
    <div
      className={`${
        isDarkMode && "bg-tertiaryBgDark text-screen"
      } mb-6 rounded-lg bg-screen p-4 text-primaryTxt shadow-md sm:p-6`}
    >
      <header className="flex items-center gap-2 border-b pb-4 text-sm sm:text-base">
        <div className="m-1 flex h-12 w-12 items-center justify-center rounded-md bg-secondaryBg text-2xl text-white">
          <span>{company.charAt(0)}</span>
        </div>
        <div className="ml-1 flex flex-col gap-1">
          <h2>{position}</h2>
          <p>{company}</p>
        </div>
      </header>

      {/* info */}
      <main className="mb-2 grid grid-cols-2 grid-rows-2 gap-3 py-4 px-2 text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <ImLocation /> {jobLocation}
        </div>
        <div className="flex items-center gap-2">
          <ImCalendar /> {date}
        </div>
        <div className="flex items-center gap-2">
          <RiSuitcase2Line /> {jobType}
        </div>
        <div>
          <span
            className={`${
              (status === "pending" && "bg-amber-100 text-yellow-600") ||
              (status === "declined" && " bg-red-100 text-red-600") ||
              (status === "interview" && " bg-green-100 text-green-600")
            } rounded-md px-2 py-1 font-medium`}
          >
            {status}
          </span>
        </div>
      </main>

      {/* buttons */}
      <footer className="flex gap-3">
        <Link to="/add-job" onClick={() => console.log("edit", _id)}>
          <Button
            variant="contained"
            className="font-normal"
            onClick={() =>
              dispatch(
                setEditJob({
                  editJobId: _id,
                  position,
                  company,
                  jobLocation,
                  jobType,
                  createdAt,
                  status,
                })
              )
            }
          >
            edit
          </Button>
        </Link>
        <Button
          variant="contained"
          className="font-normal"
          onClick={() => dispatch(deleteJob(_id))}
        >
          delete
        </Button>
      </footer>
    </div>
  );
};

export default Job;
