const people = [
	{
		name: "Leslie Alexander",
		email: "leslie.alexander@example.com",
		course: "Computer Science",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
];

const JoinedCourses = () => {
	return (
		<div className="flex justify-center py-8 bg-[#F9F5EB] h-[100vh]">
			<ul role="list" className="divide-y divide-gray-100 w-6/12">
				{people.map((person) => (
					<li
						key={person.email}
						className="flex justify-between gap-x-6 py-5 flex-col tabletM:flex-row"
					>
						<div className="flex min-w-0 gap-x-4">
							<img
								className="h-12 w-12 flex-none rounded-full bg-gray-50"
								src={person.imageUrl}
								alt=""
							/>
							<div className="min-w-0">
								<p className="text-sm font-semibold leading-6 text-gray-900">
									{person.name}
								</p>
								<p className="mt-1 truncate text-xs leading-5 text-gray-500">
									{person.email}
								</p>
							</div>
						</div>
						<div className=" shrink-0 sm:flex sm:flex-col sm:items-end mt-8 flex flex-col items-center tabletM:mt-0">
							{/* {person.dateTime ? ( */}
							<div className="mt-1 text-xs leading-5 text-gray-500">
								<p>{person.course}</p>
							</div>
							<div className="mt-1 text-xs leading-5 text-gray-500">
								<p>11.04.2003</p>
							</div>
							{/* // ) : (
							// 	<div className="mt-1 flex items-center gap-x-1.5">
							// 		<div className="flex-none rounded-full bg-emerald-500/20 p-1">
							// 			<div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
							// 		</div>
							// 		<p className="text-xs leading-5 text-gray-500">Online</p>
							// 	</div>
							// )} */}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default JoinedCourses;
