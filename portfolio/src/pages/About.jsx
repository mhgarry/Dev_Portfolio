import { motion } from "framer-motion";
import Divider from "../components/Divider";
import SkillsCycle from "../components/skillsCycle/SkillsCycle";
import useMediaQuery from "../hooks/useMediaQuery";

const About = () => {
	const LargeScreen = useMediaQuery("(min-width: 1060px)");
	return (
		<section id='about' className='pt-10 pb-24'>
			<div className='mt-32 md:flex md:justify-between md:gap-16'>
				<motion.div
					className='md:w-1/3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}>
					<p className='mb-5 text-4xl font-semibold'>
						ABOUT <span className='text-pink'>ME</span>
					</p>
					<Divider width='w-1/3' />
					<p className='mt-10 mb-7'>
						I am a passionate and versatile web developer with a keen eye for
						beautiful design and a commitment to building fast, responsive, and
						creative web applications. I am currently seeking a full-time
						position as a web developer. Please feel free to reach out to me
						with any questions or opportunities. Here are some of the
						technologies that I am proficient in:
					</p>
				</motion.div>

				<div className='mt-16 md:mt-0'>
					{LargeScreen ? (
						<div
							className='relative z-0 ml-20
              before:w-full before:h-full before:z-[-1] flex flex-col justify-center text-center align-center'>
							<p className='mb-5 text-2xl font-semibold '>
								MY <span className='text-pink'>SKILLS:</span>
							</p>
							<SkillsCycle className='relative z-10 md:mt-10' />{" "}
							<img
								src='https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/74664196'
								alt='Rutgers Certificate'
								className='mt-5 hover:cursor-pointer'
								onClick={() =>
									window.open(
										"https://docs.credentials.rutgers.edu/embed/196484e4-b438-4af3-abf3-5ebb754ae855",
										"_blank"
									)
								}
							/>
						</div>
					) : (
						<div className='z-10'>
							<p className='mb-5 text-2xl font-semibold '>
								MY <span className='text-pink'>SKILLS:</span>
							</p>
							<SkillsCycle />
							<img
								src='https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/74664196'
								alt='Rutgers Certificate'
								className='mt-5 hover:cursor-pointer'
								onClick={() =>
									window.open(
										"https://docs.credentials.rutgers.edu/embed/196484e4-b438-4af3-abf3-5ebb754ae855",
										"_blank"
									)
								}
							/>
						</div>
					)}
				</div>
			</div>

			<div className='gap-32 mt-16 md:flex md:justify-between'>
				<motion.div
					className='mt-10 md:w-1/3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='text-5xl font-semibold'>MY</p>
							<p className='mt-3 text-3xl font-semibold text-pink'>EDUCATION</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						I have a certificate from Rutgers University in Full Stack Web
						Development where I learned the MERN stack (MongoDB, Express, React,
						Nodejs). We also learned mySQL, Sequelize, Handlebars, Jquery, PWAs,
						and more. I am now diving into learning Typescript and Nextjs and
						have created applications with both. I have learned a lot in a short
						amount of time, and I am excited to continue learning and growing as
						a developer.
					</p>
				</motion.div>

				<motion.div
					className='mt-10 md:w-1/3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='text-5xl font-semibold'>MY</p>
							<p className='mt-3 text-3xl font-semibold text-pink'>
								EXPERIENCE
							</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						With a diverse background in music, writing, and high-end restaurant
						work, I bring a unique set of skills to every project. Music has
						taught me to be creative, to think outside the box, as well as how
						to improvise and create with others. Writing has taught me effective
						communication, project planning and outlining. Restaurant work has
						taught me to be a team player and to work well under pressure. I am
						excited to bring these skills to the table as a web developer.
					</p>
				</motion.div>

				<motion.div
					className='mt-10 md:w-1/3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='text-5xl font-semibold '>MY</p>
							<p className='mt-3 text-3xl font-semibold text-pink'>
								IMAGINATION
							</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-pink absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						I am a creative problem solver who is always looking for new ways to
						look at the world and improve my skills. I am a quick learner and I
						am dedicated to expanding my knowledge. I am always looking for new
						ways to grow and improve. Whatever the task, I will find a way to
						deliver a high quality product.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
