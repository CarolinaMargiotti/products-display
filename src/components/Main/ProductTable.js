import Filters from "./Filters";

function ProductTable() {
	const categories = [
		{
			id: 1,
			title: "Rexona",
			quantity: 3,
		},
	];

	return (
		<div className="row-start-2">
			<Filters categories={categories} />
		</div>
	);
}

export default ProductTable;
