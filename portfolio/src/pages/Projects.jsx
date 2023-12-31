import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

import { ProjectsArray } from "../components/ProjectArray";

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const projectVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, url, description, img }) => {
	Project.propTypes = {
		title: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
	};
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const overlayStyles = {
		opacity: isHovered ? 0.9 : 0,
		overflow: isHovered ? "auto" : "hidden",
		top: isHovered ? "50%" : "100%",
		transform: isHovered ? "translateY(-50%)" : "translateY(0%)",
		display: isHovered ? "block" : "none",
	};

	const projectTitle = title.split(" ").join("-").toLowerCase();

	const openUrlInNewTab = (url) => {
		window.open(url, "_blank");
	};

	return (
		<motion.div
			variants={projectVariant}
			className='relative'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={() => openUrlInNewTab(url)}>
			<div
				className='absolute z-30 flex flex-col items-center justify-center w-full h-full p-16 text-center transition duration-500 bg-white bg-grey text-pink'
				style={overlayStyles}>
				<p className='text-2xl'>{title}</p>
				<a
					href={url}
					className='underline mt-7 text-pink'
					target='_blank'
					rel='noopener noreferrer'>
					{url}
				</a>
				<p className='mt-7'>{description}</p>
			</div>
			<img src={img} alt={projectTitle} />
		</motion.div>
	);
};

const Projects = () => {
	return (
		<section id='projects' className='pt-48 pb-48'>
			<motion.div
				className='mx-auto text-center md:w-2/5'
				initial='hidden'
				animate='visible'
				transition={{ opacity: { duration: 0.5 }, y: { duration: 0.5 } }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}>
				<div>
					<p className='text-4xl font-semibold'>
						PRO<span className='text-pink'>JECTS</span>
					</p>
				</div>
				<p className='mt-10 mb-10'>
					Below is an ever expanding library of applications and projects
					I&apos;ve worked on and created
				</p>
			</motion.div>

			<div className='flex justify-center'>
				<motion.div
					className='sm:grid sm:grid-cols-3'
					variants={container}
					initial='hidden'
					animate='visible'
					transition={{ staggerChildren: 0.2 }}>
					<div className='flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-semibold'>
						BEAUTIFUL WEB <span className='text-pink'>APPLICATIONS</span>
					</div>
					{ProjectsArray.map((project) => (
						<div
							key={project.id}
							className='scroll-to-project max-h-[400px] max-w-[400px] h-[400px] w-[400px]'
							// eslint-disable-next-line no-undef
							onClick={() => openUrlInNewTab(project.url)}>
							<Project
								title={project.title}
								url={project.url}
								description={project.description}
								img={project.img}
								href={project.url}
							/>
						</div>
					))}
					<div className='flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-semibold'>
						MAGICAL USER <span className='text-pink'> EXPERIENCES</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
