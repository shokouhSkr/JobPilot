import { FiLogOut } from "react-icons/fi";
import AvatarPic from "/src/assets/femail-avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { clearStore } from "../../features/user/userSlice";
import { setPeriod } from "../../utils/period";

const Logout = () => {
	const {
		user: { name },
		isDarkMode,
	} = useSelector((store) => store.user);
	const dispatch = useDispatch();

	return (
		<div
			className={`${
				isDarkMode ? "bg-tertiaryBgDark" : "bg-white"
			} absolute bottom-0 flex w-full items-center gap-1 rounded-t-xl  py-4 pr-6 pl-4`}
		>
			<img src={AvatarPic} alt="Avatar" className="w-24" />

			<div>
				<span className="block text-sm text-secondaryTxt">Good {setPeriod()}</span>
				<span className={`${isDarkMode && "text-screen"} font-medium`}>{name}</span>
			</div>

			<button
				type="button"
				onClick={() => dispatch(clearStore())}
				className="ml-1 translate-x-4 p-2 text-xl font-extrabold text-secondaryTxt"
			>
				<FiLogOut strokeWidth="1" />
			</button>
		</div>
	);
};

export default Logout;
