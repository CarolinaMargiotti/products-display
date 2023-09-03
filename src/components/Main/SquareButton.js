function SquareButton(props) {
	return (
		<button
			className="text-teal-500 border-2 border-teal-500 rounded leading-none pb-2 lg:pb-1 px-4 lg:px-2 text-2xl lg:text-base "
			onClick={(e) => props.handleClick()}
		>
			{props.text}
		</button>
	);
}

export default SquareButton;
