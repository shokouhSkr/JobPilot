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
						<h1
							className={`${
								isDarkMode && "text-screen"
							} mx-auto flex h-screen justify-center text-lg font-normal text-primaryTxt md:text-xl`}
						>
							Once you add your job information, a chart will appear here.
						</h1>
					)}
				</Wrapper>
			)}
		</>
	);
};

export default StatsPage;
