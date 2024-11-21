import React from "react";
import { useSelector } from "react-redux";

const StatItem = ({ title, icon, count }) => {
	const { isDarkMode } = useSelector((store) => store.user);

	return (
		<div
			className={`rounded-md border-b-[6px] border-[#7f62c3] ${
				isDarkMode ? "bg-primaryBgDark text-screen" : "bg-screen text-primaryTxt"
			}  p-5 xs:p-6 lg:p-8`}
		>
			<div className="mb-2 flex items-center justify-between">
				<span className="text-4xl xs:text-5xl md:text-[40px] lg:text-5xl">{count}</span>
				<span className="grid place-content-center rounded-md bg-[#f9e3c6] p-2 text-3xl text-secondaryBg xs:text-4xl">
					{icon}
				</span>
			</div>
			<h1 className="text-base xs:text-lg md:text-[15px] lg:text-xl">{title}</h1>
		</div>
	);
};

export default StatItem;
