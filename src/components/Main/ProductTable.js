import Filters from "./Filters";
import { getFilters, getProducts } from "../../hooks";
import Table from "./Table";
function ProductTable() {
	const categories = Object.values(getFilters());
	const products = getProducts();

	return (
		<div className="grid-cols-8 row-start-2 col-span-full grid gap-4">
			<Filters categories={categories} />
			<Table products={products} />
		</div>
	);
}

export default ProductTable;
