import SearchBar from "./Main/SearchBar";
import ProductTable from "./Main/ProductTable";
import { useState } from "react";

function Main() {
	const [searchText, setSearchText] = useState("");

	const handleSearch = (search) => {
		setSearchText(search);
	};

	return (
		<main className="grid grid-cols-5  gap-10">
			<SearchBar handleSearch={handleSearch} />
			<ProductTable searchText={searchText} />
		</main>
	);
}

export default Main;
