import PropTypes from "prop-types";

const Divider = ({ width = "w-full" }) => {
	Divider.propTypes = {
		width: PropTypes.string.isRequired,
	};
	return (
		<div
			className={`h-0.5 ${width} bg-gradient-to-r from-pink to-primary-blue 1fr 1fr 1fr`}
		/>
	);
};

export default Divider;
