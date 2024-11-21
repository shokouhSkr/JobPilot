import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import { ChartsContainer, Wrapper, Loading, Header } from "../../components";
import { StatsContainer } from "../../components";

const StatsPage = () => {
	const { isLoading, monthlyApplications } = useSelector((store) => store.allJobs);
	const { isDarkMode } = useSelector((store) => store.user);
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

			{!isLoading && (
				<Wrapper fullHight>
					<StatsContainer />
					{monthlyApplications.length > 0 && <ChartsContainer />}
					{!monthlyApplications.length && (
						<div>
							<h1
								className={`${
									isDarkMode && "text-screen"
								} mx-auto flex h-[calc(100vh-550px)] justify-center text-lg font-normal text-primaryTxt md:h-[calc(100vh-400px)] md:text-xl`}
							>
								Once you add your job information, a chart will appear here.
							</h1>
						</div>
					)}
				</Wrapper>
			)}
		</>
	);
};

export default StatsPage;
