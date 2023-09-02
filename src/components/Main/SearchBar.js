import { useState } from "react";
import SearchIcon from "./SearchIcon";

function SearchBar(props) {
	const [searchText, setSearchText] = useState("");

	const keyDownVerification = (event) => {
		if (event.keyCode === 13) {
			props.handleSearch(searchText);
		}
	};

	return (
		<div className="w-full border-b-2 border-b-teal-500 border-solid flex transition-all hover:pb-1 ">
			<input
				data-testid="searchInput"
				value={searchText}
				className="w-full text-teal-500 placeholder-teal-500 outline-none focus:outline-none"
				placeholder="BUSQUE AQUI "
				onChange={(e) => setSearchText(e.target.value)}
				onKeyDown={(e) => keyDownVerification(e)}
			></input>
			<button
				data-testid="searchButton"
				className="cursor-pointer hoverPulsate"
				onClick={(e) => props.handleSearch(searchText)}
			>
				<SearchIcon />
			</button>
		</div>
	);
}

export default SearchBar;
