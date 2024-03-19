import {
	CloudArrowUpIcon,
	LockClosedIcon,
	ServerIcon,
} from "@heroicons/react/20/solid";

export default function ContentSection() {
	return (
		<div id="content" className="overflow-hidden bg-[#F9F5EB]">
			<div className="relative isolate overflow-hidden mt-28 bg-[#F9F5EB] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 ">
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<svg
						className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="e813992c-7d03-4cc4-a2bd-151760b470a0"
								width={200}
								height={200}
								x="50%"
								y={-1}
								patternUnits="userSpaceOnUse"
							>
								<path d="M100 200V.5M.5 .5H200" fill="none" />
							</pattern>
						</defs>
						<svg x="50%" y={-1} className="overflow-visible fill-[#E4DCCF]">
							<path
								d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
								strokeWidth={0}
							/>
						</svg>
						<rect
							width="100%"
							height="100%"
							strokeWidth={0}
							fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
						/>
					</svg>
				</div>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="lg:max-w-lg">
								<p className="text-base font-semibold leading-7 text-indigo-600">
									Your Path to Success
								</p>
								<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									EduAdmit Connect: Your Companion in College Admissions
								</h1>
								<p className="mt-6 text-xl leading-8 text-gray-700">
									Welcome to EduAdmit Connect, your trusted platform for college
									admissions. Get personalized assistance every step of the way
									to ensure a smooth and rewarding experience.
								</p>
							</div>
						</div>
					</div>
					<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
					<img
					className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
					src="/hari.jpg"  // Assuming the image file is named hari.jpg
					alt="EduAdmit Connect Screenshot"
				  />
					</div>
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
								<p>
									Navigate through our intuitive interface with ease. Our
									user-friendly platform is designed to enhance your experience
									and simplify the admissions process.
								</p>
								<ul role="list" className="mt-8 space-y-8 text-gray-600">
									<li className="flex gap-x-3">
										<CloudArrowUpIcon
											className="mt-1 h-5 w-5 flex-none text-indigo-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">
												Affordable Pricing
											</strong>{" "}
											Unlock top-notch education without breaking the bank. Our
											affordable pricing ensures that quality education is
											accessible to all.
										</span>
									</li>
									<li className="flex gap-x-3">
										<LockClosedIcon
											className="mt-1 h-5 w-5 flex-none text-indigo-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">
												Speed and Efficiency
											</strong>{" "}
											Experience lightning-fast processes that save you time and
											hassle. With EduAdmit Connect, you'll breeze through
											admissions effortlessly.
										</span>
									</li>
									<li className="flex gap-x-3">
										<ServerIcon
											className="mt-1 h-5 w-5 flex-none text-indigo-600"
											aria-hidden="true"
										/>
										<span>
											<strong className="font-semibold text-gray-900">
												Exceptional Support
											</strong>{" "}
											Receive personalized assistance every step of the way. Our
											dedicated support team is here to address your queries and
											ensure a smooth experience.
										</span>
									</li>
								</ul>
								<p className="mt-8">
									We're committed to nurturing talent and fostering growth. Join
									EduAdmit Connect, a community of driven individuals, and unlock
									your full potential.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
