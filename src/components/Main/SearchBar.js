import { useState } from "react";
import SearchIcon from "./SearchIcon";

function SearchBar(props) {
	const [searchText, setSearchText] = useState("");

	const keyDownVerification = (event) => {
		if (event.keyCode === 13) {
			props.handleSearch(searchText);
		}
	};

	const clearText = () => {
		setSearchText("");
		props.handleSearch();
	};

	return (
		<div className="w-full col-span-full sm:col-span-3 lg:col-span-2 xl:col-span-1 border-b-2 text-teal-500 border-b-teal-500 border-solid flex transition-all hover:pb-1 mb-7 lg:mb-0 ">
			{searchText && (
				<button
					className="clearTextButton hoverPulsate mr-2"
					onClick={(e) => clearText()}
				>
					×
				</button>
			)}
			<input
				data-testid="searchInput"
				value={searchText}
				className="w-full  placeholder-teal-500 outline-none focus:outline-none"
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
