import MediaIcons from "./MediaIcons";

const Footer = () => {
	return (
		<footer className='h-64 bg-turquoise pt-10'>
			<div className='w-10/12 mx-auto'>
				<MediaIcons />
			</div>
			<div className='md:flex justify-center md:justify-between text-center'>
				<p className='font-semibold text-2xl text-white'>MATTHEW GARRY</p>
				<p className='text-md text-white'>@2023 Matthew Garry</p>
			</div>
		</footer>
	);
};

export default Footer;
