const Checkout = () => {
	return (
		<div className="flex justify-center bg-[#F9F5EB]">
			<form className="w-[90%] sm:w-10/12 py-12">
				<div className="space-y-12">
					<div className="pb-12">
						<div className="flex flex-col items-center">
							<h2 className="text-base font-semibold leading-7 text-gray-900">
								Personal Information
							</h2>

							<p className="mt-1 text-sm leading-6 text-gray-600 text-center">
								This information will be displayed publicly so be careful what
								you share.
							</p>
						</div>
						<div className="pb-12 flex justify-center">
							<div className="mt-10 w-6/12  space-y-4">
								<div className="sm:col-span-3 ">
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Email address
									</label>
									<div className="mt-2">
										<input
											type="email"
											name="email"
											id="email"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label
										htmlFor="name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Name on card
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="name"
											id="name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label
										htmlFor="card"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Card number
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="card"
											id="card"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>
								<div className="flex gap-4 flex-col sm:flex-row">
									<div className="sm:col-span-3 w-8/12">
										<label
											htmlFor="expiry"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Expiration Date
										</label>
										<div className="mt-2">
											<input
												type="text"
												name="expiry"
												id="expiry"
												autoComplete="given-name"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
											/>
										</div>
									</div>
									<div className="sm:col-span-3 w-4/12">
										<label
											htmlFor="cvv"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											CVV
										</label>
										<div className="mt-2">
											<input
												type="number"
												pattern="[0-9]{3}"
												name="cvv"
												id="cvv"
												autoComplete="given-name"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
											/>
										</div>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label
										htmlFor="address"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Address
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="address"
											id="address"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>
								<div className="flex gap-4 flex-col sm:flex-row">
									<div className="sm:col-span-3 w-8/12">
										<label
											htmlFor="state"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											State
										</label>
										<div className="mt-2">
											<input
												type="text"
												name="state"
												id="state"
												autoComplete="given-name"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
											/>
										</div>
									</div>
									<div className="sm:col-span-3 w-4/12">
										<label
											htmlFor="postal"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Postal Code
										</label>
										<div className="mt-2">
											<input
												type="text"
												name="postal"
												id="postal"
												autoComplete="given-name"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
											/>
										</div>
									</div>
								</div>
								<div className="sm:col-span-3">
									<div className="block w-full rounded-md border-0 py-1.5 text-black text-center bg-indigo-400 shadow-sm p-2">
										Pay
									</div>
								</div>
								<div className="sm:col-span-3">
									<div className="block w-full rounded-md border-0 py-1.5 text-gray-400 text-center p-2">
										Payment details will be Encrypted.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Checkout;
