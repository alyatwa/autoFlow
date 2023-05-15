import Head from "next/head";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DebugHome from "./home/Home";
const Home = () => {
	return (
		<>
			<Head>
				<title>Auto Flow</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DebugHome/>
			{/* <Router>
					<div>
						<Routes>
							<Route path="/" element={} />
						</Routes>
					</div>
			</Router> */}
		</>
	);
}

export default Home