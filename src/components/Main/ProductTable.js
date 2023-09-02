import Filters from "./Filters";
import { getFilters, getProducts } from "../../hooks";
import Table from "./Table";
import { useEffect, useState } from "react";
function ProductTable(props) {
	const categories = Object.values(getFilters());
	const [products, setProducts] = useState(getProducts());
	const [filters, setFilters] = useState([]);

	useEffect(() => {
		handleSearch();
	}, [props]);

	const handleSearch = () => {
		const searchText = props.searchText.toLowerCase();

		if (!!searchText) {
			const searchResults = products.filter((item) => {
				const itemNames = item.name.toLowerCase();
				return itemNames.includes(searchText);
			});

			setProducts(searchResults);
			return;
		}

		getProductsByFilter();
	};

	const handleFilters = (selectedFilters) => {
		if (!selectedFilters) return;
		setFilters(selectedFilters);

		getProductsByFilter(selectedFilters);
	};

	const getProductsByFilter = (selectedFilters) => {
		const filtersToFilter = selectedFilters || filters;
		if (filtersToFilter.length <= 0) {
			setProducts(getProducts());
			return;
		}

		let filteredProducts = [];
		filtersToFilter.forEach((element) => {
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
