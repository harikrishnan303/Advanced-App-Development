import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="relative bg-[#F9F5EB]" id="home">
			<div
				aria-hidden="true"
				className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
			>
				<div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
				<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
			</div>
			<div>
				<div className="relative pt-36 ml-auto">
					<div className="lg:w-2/3 text-center mx-auto">
						<h1 className="text-gray-900 dark:text-black font-bold text-5xl md:text-6xl xl:text-7xl">
							Welcome to EduAdmit Connect
						</h1>
						<p className="mt-8 text-gray-700 dark:text-black">
							Discover endless possibilities as you embark on your educational
							journey with EduAdmit Connect. Our platform is designed to
							revolutionize the way you approach college admissions, making the
							process seamless and rewarding.
						</p>
						<div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
							<Link
								to="/login"
								className="relative flex h-11 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max bg-[#002B5B] rounded-3xl"
							>
								<span className="relative text-base font-semibold text-white">
									Get started
								</span>
							</Link>
							<Link
								to="#"
								className="relative flex h-11 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 border-gray-700 bg-[#E4DCCF] sm:w-max rounded-3xl"
							>
								<span className="relative text-base font-semibold text-primary text-[#002B5B]">
									Learn more
								</span>
							</Link>
						</div>
						<div
							id="diff"
							className="hidden py-8 mt-[128px] border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"
						>
							<div className="text-left">
								<h6 className="text-lg font-semibold text-gray-700 dark:text-black">
									Easy Online Application
								</h6>
								<p className="mt-2 text-gray-500">
									Apply to your desired courses with just a few clicks.
								</p>
							</div>
							<div className="text-left">
								<h6 className="text-lg font-semibold text-gray-700 dark:text-black">
									Streamlined Admission Process
								</h6>
								<p className="mt-2 text-gray-500">
									Experience a smooth and efficient admission process.
								</p>
							</div>
							<div className="text-left">
								<h6 className="text-lg font-semibold text-gray-700 dark:text-black">
									24/7 Support
								</h6>
								<p className="mt-2 text-gray-500">
									Get assistance anytime, anywhere with our support team.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
