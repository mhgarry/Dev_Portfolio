import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import { useState } from "react";
import SkillsArray from "./SkillsData.Jsx";

const SkillsCycle = () => {
	const variants = {
		enter: (direction) => {
			return { x: direction > 0 ? 1000 : -1000, opacity: 0 };
		},
		center: { zIndex: 1, x: 0, opacity: 1 },
		exit: (direction) => {
			return { zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 };
		},
	};
	const swipeConfidenceThreshold = 10000;
	const swipePower = (offset, velocity) => {
		return Math.abs(offset) * velocity;
	};

	const [[page, direction], setPage] = useState([0, 0]);
	const skillsArrayIndex = wrap(0, SkillsArray.length, page);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	const handlePrevious = () => {
		paginate(-1);
	};

	const handleNext = () => {
		paginate(1);
	};

	return (
		<div>
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					className='slideshow-container'
					style={{
						width: "300px",
						height: "300px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}>
					<h1 className='text-4xl font-semibold text-pink mb-5'>
						{SkillsArray[skillsArrayIndex].name}
					</h1>
					<motion.img
						key={page}
						src={SkillsArray[skillsArrayIndex].logo}
						custom={direction}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);
							if (swipe < -swipeConfidenceThreshold) {
								paginate(1);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1);
							}
						}}
						className='bg-white flex center justify-center rounded-3xl'
					/>
					<div className='buttons-container'>
						<button
							onClick={handlePrevious}
							className='bg-pink text-primary-blue font-semibold rounded-sm py-3 px-7 mt-5 hover:bg-deep-blue hover:text-white transition duration-500 m-4'>
							Previous Skill
						</button>
						<button
							onClick={handleNext}
							className='bg-pink text-primary-blue font-semibold rounded-sm py-3 px-7 mt-5 hover:bg-deep-blue hover:text-white transition duration-500'>
							Next Skill
						</button>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default SkillsCycle;
