import { useEffect, useState } from "react";
import Checkbox from "../../Checkbox";
import SquareButton from "../../SquareButton";
import Skeleton from "../../Skeleton";

function Filters(props) {
	const [checkedFilters, setCheckedFilters] = useState([]);
	const [showFilter, setShowFilter] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(props.isLoading);
	}, [props]);

	const categories = props.categories;

	const handleChecked = (checkedId) => {
		let filtersCheck = checkedFilters;

		if (filtersCheck.includes(checkedId)) {
			const idToRemove = filtersCheck.indexOf(checkedId);
			filtersCheck.splice(idToRemove, 1);
		} else {
			filtersCheck.push(checkedId);
		}

		setCheckedFilters(filtersCheck);
		props.handleFilters(checkedFilters);
	};

	const closeFilter = () => {
		const modalFilter = document.getElementById("modalFilter");
		modalFilter.classList.add("moveDownElement");
		setTimeout(() => {
			setShowFilter(false);
		}, 180);
	};

	return (
		<div>
			{!showFilter && (
				<div className="mt-1">
					<SquareButton
						handleClick={(e) => setShowFilter(true)}
						text="&raquo;"
					/>
				</div>
			)}
			{showFilter && (
				<div className="responsiveFilter p-5 lg:p-0" id="modalFilter">
					<div className="text-blue-950 flex flex-col items-center lg:items-start  overflow-hidden">
						<div className="flex justify-between w-full">
							<span>Filtros</span>
							<SquareButton
								handleClick={(e) => closeFilter()}
								text="&laquo;"
							/>
						</div>
						<div
							className="border-b-2 border-blue-950 mt-2 mb-2 lg:mb-0"
							style={{ height: "2px", width: "100%" }}
						></div>
						<form className="mt-2 grid gap-7 lg:gap-2">
							{isLoading && (
								<Skeleton width="7rem" height="1rem" />
							)}
							{!isLoading &&
								categories.map((category) => (
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
				</div>
			)}
		</div>
	);
}

export default Filters;
