import SearchBar from "./Main/SearchBar";

function Main() {
	const handleSearch = (searchText) => {
		console.log(searchText);
	};

	return (
		<main className="grid grid-cols-5">
			<SearchBar handleSearch={handleSearch} />
		</main>
	);
}

export default Main;
