export default function Profile() {
	return (
		<div className="py-20 bg-[#F9F5EB] h-[100vh]">
			<div className="flex justify-around ">
				<div className="w-[40%]">
					<div className="px-4 sm:px-0">
						<h3 className="text-base font-semibold leading-7 text-gray-900">
							User Information
						</h3>
						<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
							Personal details and application.
						</p>
					</div>
					<div className="mt-6 border-gray-100">
						<dl className="divide-y-2 divide-white">
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									Full name
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									Margot Foster
								</dd>
							</div>
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									Mobile
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									1234567890
								</dd>
							</div>
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									Email address
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									margotfoster@example.com
								</dd>
							</div>
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									SSLC
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									88 %
								</dd>
							</div>
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									HSC
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
									87 %
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
