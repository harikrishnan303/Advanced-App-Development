import { Link, useNavigate } from "react-router-dom";
import black_logo from "../assets/images/black-logo.png";
import { useState } from "react";

const Signup = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		password2: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add validation logic here if needed
		// For example, check if passwords match

		// Store form data in localStorage
		localStorage.setItem("signupData", JSON.stringify(formData));
		localStorage.setItem("person", "user");

		// Optionally, you can clear the form fields after submission
		setFormData({
			email: "",
			password: "",
			password2: "",
			person: "user",
		});
		navigate("/login");
	};

	return (
		<div className="flex items-center">
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  mt-[100px] w-6/12">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-[62px] w-auto"
						src={black_logo}
						alt="EduAdmit Connect"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign up to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit} method="POST">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							{/* TODO: use the classic blue and white color palette */}
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									value={formData.email}
									onChange={handleChange}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 outline-none"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>

								{/* This is for the forgot password  */}
								{/* <div className="text-sm">
								<a
									href="#"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
								>
									Forgot password?
								</a>
							</div> */}
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									value={formData.password}
									onChange={handleChange}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 outline-none"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password2"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Confirm Password
								</label>

								{/* This is for the forgot password  */}
								{/* <div className="text-sm">
								<a
									href="#"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
								>
									Forgot password?
								</a>
							</div> */}
							</div>
							<div className="mt-2">
								<input
									id="password2"
									name="password2"
									type="password"
									autoComplete="current-password"
									required
									value={formData.password2}
									onChange={handleChange}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 outline-none"
								/>
							</div>
						</div>

						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-[#002B5B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
						>
							Sign up
						</button>
					</form>

					
					
				</div>
			</div>
		</div>
	);
};
export default Signup;
