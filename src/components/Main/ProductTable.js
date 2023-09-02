import Filters from "./Filters";
import { getFilters, getProducts } from "../../hooks";
import Table from "./Table";
import { useState } from "react";
function ProductTable() {
	const categories = Object.values(getFilters());
	const [products, setProducts] = useState(getProducts());

	const handleFilters = (filters) => {
		if (filters.length <= 0) {
			setProducts(getProducts());
			return;
		}

		let filteredProducts = [];
		filters.forEach((element) => {
			const categoryIdProducts = getFilters()[element].products;
			filteredProducts.push(...categoryIdProducts);
		});
		setProducts(filteredProducts);
	};

	return (
		<div className="grid-cols-8 row-start-2 col-span-full grid gap-4">
			<Filters categories={categories} handleFilters={handleFilters} />
			<Table products={products} />
		</div>
	);
}

export default ProductTable;
