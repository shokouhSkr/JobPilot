import React from "react";
import { useSelector } from "react-redux";

const Wrapper = ({ fullHight, center, children }) => {
	const { isDarkMode } = useSelector((store) => store.user);

	return (
		<main
			className={`${isDarkMode && "bg-secondaryBgDark"} ${
				center ? "flex items-center justify-center md:items-start md:justify-start" : ""
			} ${fullHight ? "" : "h-[calc(100vh-100px)]"} px-6 pb-10 sm:px-10 md:ml-64 lg:px-12`}
		>
			{children}
		</main>
	);
};

export default Wrapper;
