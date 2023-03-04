import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Job, Loading } from "..";
import { getAllJobs } from "../../features/allJobs/allJobsSlice";

const JobsContainer = () => {
  const { isLoading, jobs } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) return <Loading />;

  if (jobs.length === 0)
    return <h1 className="grid h-[calc(100vh-150px)] place-items-center">No jobs to display...</h1>;

  return (
    <section>
      <h2>job info</h2>
      <div>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </section>
  );
};

export default JobsContainer;
