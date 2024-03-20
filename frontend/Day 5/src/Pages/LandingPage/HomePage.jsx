import Banner from "./Banner";
import Cloud from "./Clouds";
import Hero from "./Hero";
// import Stats from "./Stats";
import ContentSection from "./ContentSection";
import Footer from "./Footer";

const HomePage = () => {
	return (
		<div>
			<Banner />
			<Hero />
			{/* <Stats /> */}
			<ContentSection />
			<Cloud />
			<Footer />
		</div>
	);
};

export default HomePage;
