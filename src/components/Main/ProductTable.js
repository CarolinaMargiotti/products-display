import Filters from "./Filters";
import { getFilters, getProducts } from "../../hooks";
import Table from "./Table";
import { useEffect, useState } from "react";
function ProductTable(props) {
	const categories = Object.values(getFilters());
	const [products, setProducts] = useState([]);
	const [filters, setFilters] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getOriginalProducts = async () => {
		return getProducts();
	};

	useEffect(() => {
		handleProducts();
	}, [props, filters]);

	const handleProducts = async () => {
		setIsLoading(true);
		let items = [];

		items = await handleFilters();
		items = handleSearch(items);
		setProducts(items);
		setIsLoading(false);
	};

	const handleFilters = async () => {
		if (!filters) return;
		setFilters(filters);

		if (filters.length <= 0) {
			return await getOriginalProducts();
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
			<Filters
				categories={categories}
				handleFilters={setNewFilters}
				isLoading={isLoading}
			/>
			<Table products={products} isLoading={isLoading} />
		</div>
	);
}

export default ProductTable;
