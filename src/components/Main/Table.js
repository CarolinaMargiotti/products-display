import ProductTableItem from "./ProductTableItem";

function Table(props) {
	const products = props.products;

	return (
		<section className="col-start-2 col-span-full">
			<span>119 resultados</span>
			<div className="border-b-2 border-blue-950 mt-2"></div>
			<div className="grid justify-between gridProducts">
				{products.map((product) => (
					<ProductTableItem product={product} />
				))}
			</div>
		</section>
	);
}

export default Table;
