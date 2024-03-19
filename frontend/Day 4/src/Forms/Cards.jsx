import { Link } from "react-router-dom";

const data = [
	{
		college: "Colleges in and near Coimbatore",
		location: "Coimbatore, Tamil Nadu",
		contact: "9876543210",
		email: "coimbatorecolleges@example.com",
		courses: "50",
	},
	{
		college: "Colleges in Tamil Nadu",
		location: "Various Locations",
		contact: "9871234567",
		email: "tamilnaducolleges@example.com",
		courses: "75",
	},
	{
		college: "Technical Institutes",
		location: "Near Tamil Nadu",
		contact: "9879876543",
		email: "techinstitutes@example.com",
		courses: "40",
	},
	{
		college: "Management Schools",
		location: "Tamil Nadu",
		contact: "9877654321",
		email: "managementschools@example.com",
		courses: "60",
	},
];

const Cards = () => {
	const images = [
		"https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",

	];

	return (
		<div className="flex justify-around bg-[#F9F5EB] flex-wrap h-[100vh] py-10">
			{data.map((college, index) => (
				<div
					key={college.college}
					className="flex bg-gray-300 rounded-lg items-center shadow-lg m-4 min-w-[295px] mobileL:w-[455px] flex-col mobileL:flex-row h-[300px]"
				>
					<div className="flex flex-col justify-between items-center m-4 w-6/12">
						<img
							src={images[index % images.length]}
							className="rounded-lg object-cover w-11/12"
							alt={college.college}
						/>
						<Link
							to={"/form"}
							className="bg-[#EA5455] rounded-lg m-2 p-3 font-semibold w-20"
						>
							Enroll
						</Link>
					</div>
					<div className="text-sm font-semibold text-center mobileL:text-start m-4 mt-0 mobileL:mt-4 flex flex-col w-6/12">
						<p className="mb-2">{college.college}</p>
						<p className="mb-2">{college.location}</p>
						<p className="mb-2">{college.contact}</p>
						<p className="mb-2">{college.email}</p>
						<p className="mb-2">{college.courses}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cards;
