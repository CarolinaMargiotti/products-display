function Checkbox(props) {
	return (
		<div className="flex">
			<input
				id={`categoryCheckbox${props.id}`}
				type="checkbox"
				name={`categoryCheckbox${props.id}`}
				className="opacity-0 absolute"
				value={props.value}
				onChange={(e) => props.handleChange(props.id)}
			></input>
			<label htmlFor={`categoryCheckbox${props.id}`}>
				<div className="ml-8 select-none">{props.text}</div>
			</label>
		</div>
	);
}

export default Checkbox;
