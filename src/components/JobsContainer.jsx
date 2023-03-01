import { useDispatch, useSelector } from "react-redux";
import { Job, Loading, Wrapper } from "../components";

const JobsContainer = () => {
  const { isLoading, jobs } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  if (isLoading) return <Loading />;

  if (jobs.length === 0)
    return <h1 className="grid h-[calc(100vh-150px)] place-items-center">No jobs to display...</h1>;

  return (
    <Wrapper>
      <h2>job info</h2>
      <div className="bg-pink-200">
        {jobs.map((job) => {
          console.log(job);
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
