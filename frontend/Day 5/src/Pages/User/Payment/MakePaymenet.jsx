import { Link } from "react-router-dom";

const payment = [
	{
		name: "Leslie Alexander",
		email: "leslie.alexander@example.com",
		status: true,
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		dateTime: "2023-01-23T13:23Z",
	},
	{
		name: "Ora",
		email: "leslie.alexander@example.com",
		status: true,
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		dateTime: "2023-01-23T13:23Z",
	},
	{
		name: "Louise",
		email: "leslie.alexander@example.com",
		status: true,
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		dateTime: "2023-01-23T13:23Z",
	},
];

export default function MakePayment() {
	return (
		<div className="flex justify-center py-8 bg-[#F9F5EB] h-[100vh]">
			<ul role="list" className="divide-y divide-gray-100 w-6/12">
				{payment.map((payment) => (
					<li
						key={payment.name}
						className="flex justify-between gap-x-6 py-5 flex-col tabletM:flex-row"
					>
						<div className="flex min-w-0 gap-x-4">
							<img
								className="h-12 w-12 flex-none rounded-full bg-gray-50"
								src={payment.imageUrl}
								alt=""
							/>
							<div className="min-w-0">
								<p className="text-sm font-semibold leading-6 text-gray-900">
									{payment.name}
								</p>
								<p className="mt-1 truncate text-xs leading-5 text-gray-500">
									{payment.email}
								</p>
							</div>
						</div>
						<Link
							to={"/checkout"}
							className=" shrink-0 sm:flex sm:flex-col sm:items-end mt-8 flex flex-col items-center tabletM:mt-0"
						>
							{payment.status && (
								<div className="mt-1 flex flex-col items-center gap-x-1.5 space-y-2">
									<button className="rounded-lg shadow-md bg-blue-400 w-14 h-8">
										Pay
									</button>
									<p className="text-xs leading-5 text-gray-500">Not Paid</p>
								</div>
							)}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
