import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ContactPic from "../assets/images//contact/contact_me.png";
import MediaIcons from "../components/MediaIcons";

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [isMessageSent, setIsMessageSent] = useState(false);

	const onSubmit = async (data) => {
		try {
			const response = await fetch(
				emailjs.send(
					import.meta.env.VITE_SERVICE,
					import.meta.env.VITE_TEMPLATE,
					data,
					import.meta.env.VITE_API_KEY
				)
			);

			if (response.ok) {
				setIsMessageSent(true);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section id='contact' className='py-48 contact'>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className='flex justify-end w-full'>
				<div>
					<p className='text-4xl font-semibold'>
						<span className='text-pink'>CONTACT ME</span> LET'S COLLABORATE
					</p>
				</div>
			</motion.div>

			<div className='gap-16 mt-5 md:flex md:justify-between'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex justify-center basis-1/2'>
					<img src={ContactPic} alt='contact pic' />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex justify-center basis-1/2'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							className='w-full p-3 font-semibold bg-primary-blue placeholder-pink'
							type='text'
							placeholder='Please enter your name'
							{...register("name", {
								required: "Name is required",
								maxLength: {
									value: 100,
									message: "Name cannot exceed 100 characters",
								},
							})}
						/>
						{errors.name && (
							<p className='mt-1 text-red-500'>{errors.name.message}</p>
						)}

						<input
							className='w-full p-3 mt-5 font-semibold bg-primary-blue placeholder-pink'
							type='email'
							name='email'
							placeholder='Email Address'
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Please enter a valid email",
								},
							})}
						/>
						{errors.email && (
							<p className='mt-1 text-red-500'>{errors.email.message}</p>
						)}

						<textarea
							className='w-full p-3 mt-5 font-semibold bg-primary-blue placeholder-pink'
							placeholder='Please enter your message'
							rows='4'
							{...register("message", {
								required: "Message is required",
								maxLength: {
									value: 2000,
									message: "Message cannot exceed 2000 characters",
								},
							})}
						/>
						{errors.message && (
							<p className='mt-1 text-red-500'>{errors.message.message}</p>
						)}

						{isMessageSent && (
							<p className='mt-1 text-green-500'>Message sent successfully!</p>
						)}

						<button
							className='py-3 mt-5 font-semibold transition duration-500 rounded-sm bg-pink text-primary-blue px-7 hover:bg-deep-blue hover:text-white'
							type='submit'>
							LET'S TALK
						</button>
						<MediaIcons />
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
