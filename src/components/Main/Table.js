import ProductTableItem from "./ProductTableItem";

function Table(props) {
	const products = props.products;

	return (
		<section className="lg:col-start-2 col-start-1 col-span-full">
			<span className="text-blue-950">{products.length} resultados</span>
			<div className="border-b-2 border-blue-950 mt-4"></div>
			<div
				className="grid mt-5 gap-10 gridProducts"
				style={{
					justifyContent:
						products.length === 1 ? "start" : "space-around",
				}}
			>
				{products.map((product) => (
					<ProductTableItem product={product} />
				))}
			</div>
		</section>
	);
}

export default Table;
