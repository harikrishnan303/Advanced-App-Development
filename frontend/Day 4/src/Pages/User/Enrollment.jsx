import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Enrollment = () => {
	return (
		<div className="flex justify-around bg-[#F9F5EB]">
			<form className="w-6/12 py-12">
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Personal Information
						</h2>

						<p className="mt-1 text-sm leading-6 text-gray-600">
							This information will be displayed publicly so be careful what you
							share.
						</p>
						<div className="col-span-ful pt-8">
							<label
								htmlFor="photo"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Photo
							</label>
							<div className="mt-2 flex items-center gap-x-3">
								<UserCircleIcon
									className="h-12 w-12 text-white"
									aria-hidden="true"
								/>
								<button
									type="button"
									className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								>
									Change
								</button>
							</div>
						</div>
						<div className="pb-12">
							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-3">
									<label
										htmlFor="first-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Name
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Father Name
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-4">
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Email address
									</label>
									<div className="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="gender"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Gender
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="gender"
											id="gender"
											autoComplete="gender"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>
								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="mobile"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Mobile
									</label>
									<div className="mt-2">
										<input
											type="number"
											name="mobile"
											pattern="[0-9]{10}"
											placeholder="987654xxxx"
											id="mobile"
											autoComplete="mobile"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="dob"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										DOB
									</label>
									<div className="mt-2">
										<input
											type="date"
											name="dob"
											id="dob"
											autoComplete="gender"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="Age"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Age
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="age"
											id="age"
											autoComplete="age"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-3 flex w-10/12 space-x-4">
									<div className="sm:col-span-2 sm:col-start-1">
										<label
											htmlFor="sslc"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											SSLC %
										</label>
										<div className="mt-2">
											<input
												type="number"
												min={0}
												max={100}
												name="sslc"
												id="sslc"
												autoComplete="sslc"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
											/>
										</div>
									</div>

									<div className="sm:col-span-2 sm:col-start-1">
										<label
											htmlFor="hsc"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											HSC %
										</label>
										<div className="mt-2">
											<input
												type="number"
												min={0}
												max={100}
												name="hsc"
												id="hsc"
												autoComplete="hsc"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
											/>
										</div>
									</div>
								</div>

								<div className="sm:col-span-4">
									<label
										htmlFor="country"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Nationality
									</label>
									<div className="mt-2">
										<select
											id="country"
											name="country"
											autoComplete="country-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2"
										>
											<option>United States</option>
											<option>Canada</option>
											<option>Mexico</option>
										</select>
									</div>
								</div>

								<div className="col-span-full">
									<label
										htmlFor="street-address"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Address
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="street-address"
											id="street-address"
											autoComplete="street-address"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="city"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										City
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="city"
											id="city"
											autoComplete="address-level2"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-2">
									<label
										htmlFor="region"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										State / Province
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="region"
											id="region"
											autoComplete="address-level1"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>

								<div className="sm:col-span-2">
									<label
										htmlFor="postal-code"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										ZIP / Postal code
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="postal-code"
											id="postal-code"
											autoComplete="postal-code"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Link
					to={"/makePayment"}
					className="mt-6 flex items-center justify-end gap-x-6"
				>
					<button
						type="button"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Cancel
					</button>
					<button
						// type="submit"
						className="rounded-md bg-[#EA5455] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e36a6af2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 p-2"
					>
						Save
					</button>
				</Link>
			</form>
		</div>
	);
};

export default Enrollment;
