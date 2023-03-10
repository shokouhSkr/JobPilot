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

  return (
    <>
      <Header page="Stats" />

      {isLoading && (
        <Wrapper>
          <Loading />
        </Wrapper>
      )}

      <Wrapper>
        <StatsContainer />
        {monthlyApplications.length > 0 && <ChartsContainer />}
      </Wrapper>
    </>
  );
};

export default Stats;
