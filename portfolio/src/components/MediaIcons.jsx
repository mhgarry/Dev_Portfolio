import React from "react";
import github from "../assets/images/contact/icons8-github-96.png";
import gmail from "../assets/images/contact/icons8-gmail-96.png";
import linkedIn from "../assets/images/contact/icons8-linkedin-96.png";

const MediaIcons = () => {
	return (
		<div className='flex justify-center md:justify-start my-10 gap-7'>
			<a
				className='hover:opacity-50 transition duration-500'
				target='_blank'
				rel='noreferrer'
				href='https://www.github.com/mhgarry'>
				<img alt='github' src={github} />
			</a>
			<a
				className='hover:opacity-50 transition duration-500'
				target='_blank'
				rel='noreferrer'
				href='https://www.linkedin.com/in/matthew-garry-46a8b5277//'>
				<img alt='linkedin' src={linkedIn} />
			</a>
			<a
				className='hover:opacity-50 transition duration-500'
				target='_blank'
				rel='noreferrer'
				href='mailto:matthewhgarry@gmail.com'>
				<img alt='email' src={gmail} />
			</a>
		</div>
	);
};

export default MediaIcons;
