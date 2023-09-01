import Checkbox from "./Checkbox";

function Filters(props) {
	return (
		<div className="text-blue-950 grid gap-4">
			<span>Filtros</span>
			<div className="border-b-2 border-blue-950"></div>
			{props.categories.map((category) => (
				<Checkbox
					value={category.id}
					text={`${category.title} (${category.quantity})`}
				/>
			))}
		</div>
	);
}

export default Filters;
