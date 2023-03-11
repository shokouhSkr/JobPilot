import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import { ChartsContainer, Wrapper, Loading, Header } from "../../components";
import { StatsContainer } from "../../components";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading)
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );

  return (
    <>
      <Header page="Stats" />

      <Wrapper fullHight>
        <StatsContainer />
        {monthlyApplications.length > 0 && <ChartsContainer />}
      </Wrapper>
    </>
  );
};

export default Stats;
