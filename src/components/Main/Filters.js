import { useState } from "react";
import Checkbox from "./Checkbox";

function Filters(props) {
	const [checkedFilters, setCheckedFilters] = useState([]);

	const categories = props.categories;

	const handleChecked = (checkedId) => {
		let filtersCheck = checkedFilters;

		if (filtersCheck.includes(checkedId)) {
			console.log("remover array");
			const idToRemove = filtersCheck.indexOf(checkedId);
			filtersCheck.splice(idToRemove, 1);
		} else {
			filtersCheck.push(checkedId);
		}

		setCheckedFilters(filtersCheck);
		props.handleFilters(checkedFilters);
	};

	return (
		<div className="text-blue-950 flex flex-col">
			<span>Filtros</span>
			<div className="border-b-2 border-blue-950 mt-2"></div>
			<form className="mt-2 grid gap-2">
				{categories.map((category) => (
					<Checkbox
						key={category.id}
						id={category.id}
						value={category.id}
						text={`${category.name} (${category.quantity})`}
						handleChange={handleChecked}
					/>
				))}
			</form>
		</div>
	);
}

export default Filters;
