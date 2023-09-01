import Checkbox from "./Checkbox";

function Filters(props) {
	let checkedFilters = [];

	const handleChecked = (checkedId) => {
		if (checkedFilters.includes(checkedId)) {
			const idToRemove = checkedFilters.indexOf(checkedId);
			checkedFilters.splice(idToRemove, 1);
			return;
		}
		checkedFilters.push(checkedId);
	};

	return (
		<div className="text-blue-950 grid gap-4">
			<span>Filtros</span>
			<div className="border-b-2 border-blue-950"></div>
			<form className="grid gap-2">
				{props.categories.map((category) => (
					<Checkbox
						key={category.id}
						id={category.id}
						value={category.id}
						text={`${category.name} (${category.quantity})`}
						handleChange={handleChecked}
					/>
				))}
			</form>
		</div>
	);
}

export default Filters;
