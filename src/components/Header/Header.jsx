import { useDispatch, useSelector } from "react-redux";
import { BsMoonStars, BsBrightnessHigh, BsList } from "react-icons/bs";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice";
import { setDarkMode } from "../../features/user/userSlice";

const Header = ({ page }) => {
	const {
		user: { name },
		isDarkMode,
	} = useSelector((store) => store.user);
	const dispatch = useDispatch();

	return (
		<header
			className={`${
				isDarkMode && "bg-secondaryBgDark"
			} flex items-center justify-between px-6 py-8 sm:p-12 md:ml-64`}
		>
			<div>
				<h1
					className={`${
						isDarkMode && "text-screen"
					} mb-1 text-xl font-semibold text-primaryTxt xs:text-2xl`}
				>
					{page}
				</h1>
				<p className="text-[13px] text-secondaryTxt xs:text-sm">Hello {name}, Welcome back!</p>
			</div>

			<div className="flex gap-3 text-lg text-primaryBg xs:text-xl lg:text-2xl">
				<button
					type="button"
					onClick={() => dispatch(setDarkMode(!isDarkMode))}
					className="grid place-content-center rounded-md bg-screen p-1.5 shadow-sm xs:p-2"
				>
					{isDarkMode ? <BsBrightnessHigh strokeWidth="0.1" /> : <BsMoonStars strokeWidth="0.1" />}
				</button>
				<button
					type="button"
					onClick={() => dispatch(toggleSidebar())}
					className="grid place-content-center rounded-md bg-screen p-1.5 shadow-sm xs:p-2 md:hidden"
				>
					<BsList strokeWidth="0.1" />
				</button>
			</div>
		</header>
	);
};

export default Header;
