import data from "./assets/products.json";

const getFilters = () => {
	let filters = {};
	const productsData = data.data.nodes;
	productsData.forEach((element) => {
		const elementCategoryInfo = element?.category;
		const category = filters[elementCategoryInfo._id];
		if (!category) {
			filters[elementCategoryInfo._id] = {
				quantity: 1,
				name: elementCategoryInfo.name,
				id: elementCategoryInfo._id,
				products: [element],
			};

			return;
		}
		filters[elementCategoryInfo._id].quantity =
			filters[elementCategoryInfo._id].quantity + 1;
		filters[elementCategoryInfo._id].products.push(element);
	});

	return filters;
};

const getProducts = () => {
	return data.data.nodes;
};

export { getProducts, getFilters };
