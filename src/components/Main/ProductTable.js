import Filters from "./Filters";
import { getFilters } from "../../hooks";

function ProductTable() {
	const categories = Object.values(getFilters());

	return (
		<div className="row-start-2">
			<Filters categories={categories} />
		</div>
	);
}

export default ProductTable;
