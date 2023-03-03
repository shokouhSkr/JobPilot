import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import { Wrapper } from "../../components";

const Stats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  return (
    <Wrapper center>
      <div>stats</div>
    </Wrapper>
  );
};

export default Stats;
