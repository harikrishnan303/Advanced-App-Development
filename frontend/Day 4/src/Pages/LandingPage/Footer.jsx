import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-[#F9F5EB] p-4">
			<footer className="bg-[#F9F5EB] rounded-lg shadow h-auto dark:bg-[#002B5B]">
				<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center">
						© 2023{" "}
						<Link to="/" className="hover:underline">
							EduAdmit Connect
						</Link>
						. All Rights Reserved.
					</span>
					<ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-1">
						<li>
							<a href="#about" className="hover:underline me-4 md:me-6">
								About
							</a>
						</li>
						<li>
							<a href="#diff" className="hover:underline me-4 md:me-6">
								Pros
							</a>
						</li>
						<li>
							<a href="#content" className="hover:underline me-4 md:me-6">
								Why ?
							</a>
						</li>
						<li>
							<a href="#partners" className="hover:underline">
								Partners
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
