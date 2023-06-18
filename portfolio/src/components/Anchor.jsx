import AnchorLink from "react-anchor-link-smooth-scroll";

const Anchor = ({ selectedPage, setSelectedPage }) => {
	const selectedStyles = `relative bg-deep-blue before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-pink before:left-[-50%] before:top-[-50%]`;

	return (
		<div className='flex flex-col gap-6 top-[60%] right-7'>
			<AnchorLink
				href='#home'
				className={`${
					selectedPage === "home" ? selectedStyles : "bg-primary-blue"
				}w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage("home")}
			/>
			<AnchorLink
				href='#about'
				className={`${
					selectedPage === "about" ? selectedStyles : "bg-primary-blue"
				}w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage("about")}
			/>
			<AnchorLink
				href='#projects'
				className={`${
					selectedPage === "projects" ? selectedStyles : "bg-primary-blue"
				}w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage("projects")}
			/>
			<AnchorLink
				href='#contact'
				className={`${
					selectedPage === "contact" ? selectedStyles : "bg-primary-blue"
				}w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage("contact")}
			/>
			<AnchorLink
				href='#resume'
				className={`${
					selectedPage === "resume" ? selectedStyles : "bg-primary-blue"
				}w-3 h-3 rounded-full`}
				onClick={() => setSelectedPage("resume")}
			/>
		</div>
	);
};

export default Anchor;
