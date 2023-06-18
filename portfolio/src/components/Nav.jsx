import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery.jsx";

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? "text-pink" : ""
			} hover:text-pink transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}>
			{page}
		</AnchorLink>
	);
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const [isMenuToggle, setIsMenuToggle] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const navBackground = isTopOfPage ? "transparent" : "bg-turquoise";

	return (
		<nav className={`${navBackground} z-40 w-full fixed top-0 py-6`}>
			<div className='flex items-center justify-between w-5/6 mx-auto'>
				<h1 className='text-3xl font-bold text-pink'>
					MEDIASCAPE<span className='text-white'>Designs</span>
				</h1>

				{isDesktop ? (
					<div className='flex justify-between gap-16 text-lg font-semibold'>
						<Link
							page='HOME'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='ABOUT'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='PROJECTS'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='CONTACT'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='RESUME'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				) : (
					<button
						className='p-2 rounded-full bg-pink'
						onClick={() => setIsMenuToggle(!isMenuToggle)}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z'
								fill='white'
							/>
						</svg>
					</button>
				)}
				{!isDesktop && isMenuToggle && (
					<div className='fixed right-0 bottom-0 h-full bg-blue w-[300px] bg-deep-blue'>
						<div className='flex justify-end p-12'>
							<button onClick={() => setIsMenuToggle(!isMenuToggle)}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
										fill='white'
										fillOpacity='0.54'
									/>
								</svg>
							</button>
						</div>

						<div className='flex flex-col gap-10 ml-[33%] text-2xl text-pink'>
							<Link
								page='Home'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page='About'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page='Projects'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page='Contact'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page='Resume'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
