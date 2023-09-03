import Filters from "./Filters";
import { getFilters, getProducts } from "../../hooks";
import Table from "./Table";
import { useEffect, useState } from "react";
function ProductTable(props) {
	const categories = Object.values(getFilters());
	const [products, setProducts] = useState(getProducts());
	const [filters, setFilters] = useState([]);

	useEffect(() => {
		handleProducts();
	}, [props, filters]);

	const handleProducts = () => {
		console.log(props.searchText);
		let items = [];

		items = handleFilters();
		items = handleSearch(items);
		setProducts(items);
	};

	const handleFilters = () => {
		if (!filters) return;
		setFilters(filters);

		if (filters.length <= 0) {
			return getProducts();
		}

		let filteredProducts = [];
		filters.forEach((element) => {
			const categoryIdProducts = getFilters()[element].products;
			filteredProducts.push(...categoryIdProducts);
		});

		return filteredProducts;
	};

	const handleSearch = (items) => {
		const searchText = props?.searchText?.toLowerCase();

		if (searchText) {
			const searchResults = items.filter((item) => {
				const itemNames = item.name.toLowerCase();
				return itemNames.includes(searchText);
			});
			return searchResults;
		}

		return items;
	};

	const setNewFilters = (selectedFilters) => {
		setFilters([...selectedFilters]);
	};

	return (
		<div className="gridFiltersTable items-start row-start-2 col-span-full grid gap-4">
			<Filters categories={categories} handleFilters={setNewFilters} />
			<Table products={products} />
		</div>
	);
}

export default ProductTable;
