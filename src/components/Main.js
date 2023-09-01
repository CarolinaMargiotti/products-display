import SearchBar from "./Main/SearchBar";
import ProductTable from "./Main/ProductTable";

function Main() {
	const handleSearch = (searchText) => {
		console.log(searchText);
	};

	return (
		<main className="grid grid-cols-5  gap-10">
			<SearchBar handleSearch={handleSearch} />
			<ProductTable />
		</main>
	);
}

export default Main;
