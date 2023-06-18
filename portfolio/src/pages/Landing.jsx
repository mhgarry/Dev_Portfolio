import { motion } from "framer-motion";
import PropTypes from "prop-types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfilePic from "../assets/images/profilepic/profilepic.png";
import MediaIcons from "../components/MediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";

const Landing = ({ setSelectedPage }) => {
	Landing.propTypes = {
		setSelectedPage: PropTypes.func.isRequired,
	};
	const LargeScreen = useMediaQuery("(min-width: 1060px)");
	return (
		<section
			id='home'
			className='gap-16 py-10 md:flex md:justify-between md:items-center md:h-full'>
			<div className='z-10 flex justify-center mt-16 basis-3/5 md:mt-32 md:order-2'>
				{LargeScreen ? (
					<div
						className='opacity-90 before:rounded-3xl relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
            before:w-full before:max-w-[600px] md:before:max-w-[600px] before:h-full before:border-2 before:border-pink before:z-[-1]'>
						<img
							alt='profile'
							className='opacity-90 rounded-3xl transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
							src={ProfilePic}
						/>
					</div>
				) : (
					<img
						alt='profile'
						className='z-10 w-full max-w-[400px] md:max-w-[600px]'
						src={ProfilePic}
					/>
				)}
			</div>

			<div className='z-30 mt-12 basis-2/5 md:mt-32'>
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
					<p className='z-10 text-6xl text-center md:text-start'>
						Matthew {""}
						<span
							className='xs:relative xs:text-pink xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]'>
							Garry
						</span>
					</p>

					<p className='mt-10 text-sm text-center mb-7 md:text-start'>
						I&apos;m a full stack web developer. My passion is making beautiful,
						fast, responsive, and creative web applications. Come visit my
						virtual playground.
					</p>
				</motion.div>
				<motion.div
					className='flex justify-center mt-5 md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}>
					<AnchorLink
						className='py-3 font-semibold transition duration-500 rounded-sm bg-primary-blue text-pink px-7 hover:bg-deep-blue hover:text-white'
						onClick={() => setSelectedPage("contact")}
						href='#contact'>
						Contact Me
					</AnchorLink>
					<AnchorLink
						className='rounded-r-sm bg-primary-blue
          py-0.5 px-0.5'
						onClick={() => setSelectedPage("contact")}
						href='#contact'>
						<div className='flex items-center justify-center w-full h-full px-10 transition duration-500 bg-primary-blue hover:text-white'>
							Let&apos;s collaborate
						</div>
					</AnchorLink>
				</motion.div>
				<motion.div
					className='flex justify-center mt-5 md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}>
					<MediaIcons />
				</motion.div>
			</div>
		</section>
	);
};

export default Landing;
