import React, { useState, useEffect } from "react";
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
      <h2 className="font-bold">
        {totalJobs} job{totalJobs > 1 && "s"} found
      </h2>
      <div>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>

      {numOfPages > 1 && (
        <Pagination
          count={numOfPages}
          shape="rounded"
          page={page}
          onChange={(e, value) => dispatch(changePage(value))}
        />
      )}
    </section>
  );
};

export default JobsContainer;
