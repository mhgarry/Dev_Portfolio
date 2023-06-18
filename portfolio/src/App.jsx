import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import useMediaQuery from "./hooks/useMediaQuery";

import Anchor from "./components/Anchor";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import Words from "./components/Words";
import "./index.css";

import Landing from "./pages/Landing";

const App = () => {
	const [selectedPage, setSelectedPage] = useState("home");
	const [isTopOfPage, setIsTopOfPage] = useState(true);
	const isDesktop = useMediaQuery("(min-width: 1060px)");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage("home");
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className='app bg-deep-blue'>
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<div className='w-5/6 mx-auto md:h-full'>
				{isDesktop && (
					<Anchor
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				)}
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					transition={{ duration: 0.5 }}>
					<Landing setSelectedPage={setSelectedPage} />
				</motion.div>
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					transition={{ duration: 0.5 }}>
					<Words />
				</motion.div>
			</div>
			<Divider />
			<Footer />
		</div>
	);
};

export default App;
