import React, { useEffect } from "react";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Job, Loading } from "..";
import { getAllJobs, changePage } from "../../features/allJobs/allJobsSlice";

const JobsContainer = () => {
  const { isLoading, jobs, numOfPages, totalJobs, page, search, searchStatus, searchType, sort } =
    useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) return <Loading />;

  if (jobs.length === 0)
    return <h1 className="grid h-[calc(100vh-150px)] place-items-center">No jobs to display...</h1>;

  return (
    <section>
      <h2 className="mb-4 px-1 text-xl font-bold text-primaryTxt">
        {totalJobs} job{totalJobs > 1 && "s"} found
      </h2>

      <div className="grid-cols-2 gap-4 lg:grid">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>

      <div className="flex justify-end ">
        {numOfPages > 1 && (
          <Pagination
            count={numOfPages}
            shape="rounded"
            page={page}
            onChange={(e, value) => dispatch(changePage(value))}
          />
        )}
      </div>
    </section>
  );
};

export default JobsContainer;
