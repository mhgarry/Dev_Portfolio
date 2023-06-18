import PropTypes from "prop-types";
import github from "../assets/images/contact/icons8-github-96.png";
import gmail from "../assets/images/contact/icons8-gmail-96.png";
import linkedIn from "../assets/images/contact/icons8-linkedin-96.png";

const MediaIcons = () => {
	MediaIcons.propTypes = {
		title: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
	};
	return (
		<div className='flex justify-center my-10 md:justify-start gap-7'>
			<a
				className='transition duration-500 hover:opacity-50'
				target='_blank'
				rel='noreferrer'
				href='https://www.github.com/mhgarry'>
				<img alt='github' src={github} />
			</a>
			<a
				className='transition duration-500 hover:opacity-50'
				target='_blank'
				rel='noreferrer'
				href='https://www.linkedin.com/in/matthew-garry-46a8b5277//'>
				<img alt='linkedin' src={linkedIn} />
			</a>
			<a
				className='transition duration-500 hover:opacity-50'
				target='_blank'
				rel='noreferrer'
				href='mailto:matthewhgarry@gmail.com'>
				<img alt='email' src={gmail} />
			</a>
		</div>
	);
};

export default MediaIcons;
