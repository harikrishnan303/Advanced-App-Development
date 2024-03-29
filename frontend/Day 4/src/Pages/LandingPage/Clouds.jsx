const cloudItems = [
	{
		key: 1,
		src: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
		alt: "Transistor",
	},
	{
		key: 2,
		src: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
		alt: "Reform",
	},
	{
		key: 3,
		src: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
		alt: "Tuple",
	},
	{
		key: 4,
		src: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
		alt: "SavvyCal",
	},
	{
		key: 5,
		src: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
		alt: "Statamic",
	},
];

export default function Cloud() {
	return (
		<div id="partners" className="bg-[#F9F5EB] py-24 sm:py-32 ">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
					Trusted by the world’s most innovative teams
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					{cloudItems.map((item) => (
						<img
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							key={item.key}
							src={item.src}
							alt={item.alt}
							width={158}
							height={48}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
