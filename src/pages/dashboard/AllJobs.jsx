import { Header, JobsContainer, SearchContainer, Wrapper } from "../../components";

const AllJobs = () => {
	return (
		<>
			<Header page="All Jobs" />

			<Wrapper fullHight>
				<SearchContainer />
				<JobsContainer />
			</Wrapper>
		</>
	);
};

export default AllJobs;
