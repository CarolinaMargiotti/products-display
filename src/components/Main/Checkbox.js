function Checkbox(props) {
	return (
		<div className="flex">
			<input
				id="categoryCheckbox"
				type="checkbox"
				name="category"
				className="opacity-0 absolute"
				value={props.value}
			></input>
			<label for="categoryCheckbox">
				<div className="ml-8 select-none">{props.text}</div>
			</label>
		</div>
	);
}

export default Checkbox;
