function Filters() {
	return (
		<div className="text-blue-950 grid gap-4">
			<span>Filtros</span>
			<div className="border-b-2 border-blue-950"></div>
			<div className="flex">
				<input
					id="categoryCheckbox"
					type="checkbox"
					className="opacity-0 absolute"
				></input>
				<label for="categoryCheckbox">
					<div className="ml-8 select-none">Categoria (3)</div>
				</label>
			</div>
		</div>
	);
}

export default Filters;
