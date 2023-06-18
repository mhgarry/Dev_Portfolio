import { motion } from "framer-motion";
import FunctionLogo from "../assets//images//skills///function.svg";
import MyResume from "../assets/Resume.docx.pdf";
import ResumePicture from "../assets/images/resumepreview.png";
import useMediaQuery from "../hooks/useMediaQuery";

const Resume = () => {
	const LargeScreen = useMediaQuery("(min-width: 1060px)");
	const onSubmit = async () => {
		try {
			const response = await fetch(MyResume);
			const blob = await response.blob();
			const fileUrl = window.URL.createObjectURL(blob);
			let fileLink = document.createElement("a");
			fileLink.href = fileUrl;
			fileLink.setAttribute("download", "Resume.docx.pdf");
			document.body.appendChild(fileLink);
			fileLink.click();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section
			id='resume'
			className='md:flex md:justify-between md:items-center md:h-full py-10'>
			<div className='basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
				{LargeScreen ? (
					<div
						className='opacity-90 before:rounded-3xl relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
            before:w-full before:max-w-[600px] md:before:max-w-[600px] before:h-full before:border-2 before:border-pink before:z-[-1]'>
						<img
							alt='profile'
							className='opacity-90 rounded-3xl transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
							src={ResumePicture}
						/>
					</div>
				) : (
					<img
						alt='profile'
						className='z-10 w-full max-w-[400px] md:max-w-[600px]'
						src={ResumePicture}
					/>
				)}
			</div>
			<div className='z-30 basis-2/5 mt-12 md:mt-32'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1.5 }}
					variants={{
						hidden: {
							opacity: 0,
							x: -50,
						},
						visible: {
							opacity: 1,
							x: 0,
						},
					}}>
					{" "}
					<p className='text-6xl z-10 text-center md:text-start'>
						MY {""}
						<span
							className='xs:relative xs:text-pink xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]'>
							RESUME
						</span>
					</p>
				</motion.div>
				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}>
					<button
						onClick={onSubmit}
						className='bg-pink text-primary-blue font-semibold rounded-sm py-3 px-7 mt-5 hover:bg-deep-blue hover:text-white transition duration-500'>
						DOWNLOAD RESUME
					</button>
				</motion.div>
				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}>
					<img src={FunctionLogo} alt='resume pic' />
				</motion.div>
			</div>
		</section>
	);
};

export default Resume;
