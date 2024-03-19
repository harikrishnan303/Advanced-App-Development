import { Link, useNavigate } from "react-router-dom";
import white_logo from "../../assets/images/white-logo.png";

const Header = () => {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.clear();
		navigate("/");
	};

	const navigator = (path) => {
		navigate(path);
	};

	return (
		<header>
			<nav
				id="about"
				className="bg-[#002B5B] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-[#002B5B]"
			>
				<div className="flex flex-wrap justify-center sm:justify-between items-center mx-auto max-w-screen-xl">
					<Link to="/" className="flex items-center">
						<img
							src={white_logo}
							className="mr-3 h-8 sm:h-9"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							EduAdmit Connect
						</span>
					</Link>
					<div className="flex items-center lg:order-2">
						{localStorage.getItem("isLoggedIn") ? (
							<button
								onClick={logout}
								className="text-white font-medium bg-transparent rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 outline-none"
							>
								Log out
							</button>
						) : (
							<>
								<Link
									to="/sign"
									className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 outline-none "
								>
									Sign up
								</Link>
								<Link
									to="/login"
									className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 outline-none"
								>
									Log in
								</Link>
								<Link
									to="/adminLogin"
									className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 outline-none"
								>
									AdminLogin
								</Link>
								<Link
									to="/contactus"
									className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 outline-none"
								>
								  Contact Us
								</Link>
							</>
						)}
					</div>
					<div
						className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
						id="mobile-menu-2"
					>
						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							<li>
								<Link
									to="/"
									className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
									aria-current="page"
								>
									Home
								</Link>
							</li>

							{localStorage.getItem("isLoggedIn") && (
								<>
									{localStorage.getItem("person") === "user" ? (
										<li
											onClick={() => navigator("/dash")}
											className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
										>
											DashBoard
										</li>
									) : (
										<li
											onClick={() => navigator("/adminDash")}
											className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
										>
											Admin DashBoard
										</li>
									)}
									<li
										onClick={() => navigator("/profile")}
										className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
									>
										Profile
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};
export default Header;
