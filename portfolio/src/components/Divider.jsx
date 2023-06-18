const Divider = ({ width = "w-full" }) => {
	return (
		<div
			className={`h-0.5 ${width} bg-gradient-to-r from-pink to-primary-blue 1fr 1fr 1fr`}
		/>
	);
};

export default Divider;
