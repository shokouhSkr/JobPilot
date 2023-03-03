import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteJob } from "../features/job/jobSlice";
import moment from "moment";

const Job = ({ _id, position, company, jobLocation, jobType, createdAt, status }) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMM Do, YY");

  return (
    <div className="m-4 bg-green-200 p-4">
      <header className="flex items-center gap-2 border-b border-main">
        <div className="m-1 flex h-8 w-8 items-center justify-center rounded-sm bg-blue-600 p-2">
          <span>{company.charAt(0)}</span>
        </div>
        <div>
          <h2>{position}</h2>
          <p>{company}</p>
        </div>
      </header>

      {/* info */}
      <main className="mb-2 grid grid-cols-2 grid-rows-2 gap-1 p-2">
        <div className="flex items-center gap-2">
          <FaLocationArrow /> {jobLocation}
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt /> {date}
        </div>
        <div className="flex items-center gap-2">
          <FaBriefcase /> {jobType}
        </div>
        <div className={`${status === "pending" && "bg-yellow-500"} flex items-center gap-2`}>
          {status}
        </div>
      </main>

      {/* buttons */}
      <footer className="flex gap-2">
        <Link to="/add-job" onClick={() => console.log("edit", _id)}>
          <Button variant="contained">edit</Button>
        </Link>
        <Button variant="contained" onClick={() => dispatch(deleteJob(_id))}>
          delete
        </Button>
      </footer>
    </div>
  );
};

export default Job;
