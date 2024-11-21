import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Error, Register, ProtectedRoute } from "./pages";
import { Profile, AllJobs, StatsPage, AddJob, SharedLayout } from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { addLocalStorageTheme } from "./utils/localStorage";

function App() {
	const { isDarkMode } = useSelector((store) => store.user);

	useEffect(() => {
		addLocalStorageTheme(isDarkMode);
	}, [isDarkMode]);

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<StatsPage />} />
					<Route path="profile" element={<Profile />} />
					<Route path="all-jobs" element={<AllJobs />} />
					<Route path="add-job" element={<AddJob />} />
				</Route>
				<Route path="landing" element={<Landing />} />
				<Route path="register" element={<Register />} />
				<Route path="*" element={<Error />} />
			</Routes>

			<ToastContainer position="top-center" autoClose={1200} hideProgressBar theme="colored" />
		</Router>
	);
}

export default App;
