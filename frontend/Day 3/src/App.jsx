import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/LandingPage/Header";
import HomePage from "./Pages/LandingPage/HomePage";
import LoginForm from "./Forms/Login";
import Signup from "./Forms/Signup";
import Profile from "./Pages/User/Profile";
import Enrollment from "./Pages/User/Enrollment";
import PaymentHistory from "./Pages/User/Payment/PaymentHistory";
import UserDashBoard from "./Pages/User/UserDashBoard";
import JoinedCourses from "./Pages/User/JoinedCourses";
import Checkout from "./Pages/User/Payment/Checkout";
import MakePayment from "./Pages/User/Payment/MakePaymenet";
import { Suspense, lazy } from "react";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminLogin from "./Pages/Admin/Admin Login/AdminLogin";
import Error404 from "./Pages/Error404";
import ContactUs from "./Pages/Contactus";
import Footer from "./Pages/LandingPage/Footer";

const Card = lazy(() => import("./Forms/Cards"));

function App() {
	return (
		<>
			<BrowserRouter>
			<Header />
			<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/sign" element={<Signup />}></Route>
					<Route path="/login" element={<LoginForm />}></Route>
					<Route path="/adminLogin" element={<AdminLogin />}></Route>
					<Route path="/dash" element={<UserDashBoard />}></Route>
					<Route path="/adminDash" element={<AdminDashboard />}></Route>
					<Route path="/courses" element={<JoinedCourses />}></Route>
					<Route path="/form" element={<Enrollment />}></Route>
					<Route
						path="/card"
						element={
							<Suspense fallback={"loading..."}>
								<Card />
							</Suspense>
						}
					></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/makePayment" element={<MakePayment />}></Route>
					<Route path="/checkout" element={<Checkout />}></Route>
					<Route path="/contactus" element={<ContactUs/>}></Route>
					<Route path="/Paymenthistory" element={<PaymentHistory />}></Route>
					<Route path="*" element={<Error404 />}></Route>
					</Routes>
				
			</BrowserRouter>
		</>
	);
}

export default App;
