import { useEffect, useState } from "react";
import ProductTableItem from "./ProductTableItem";
import ProductTableItemSkeleton from "./ProductTableItemSkeleton";

function Table(props) {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(props.isLoading);
	}, [props]);
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
				{isLoading &&
					[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
						<ProductTableItemSkeleton />
					))}
				{!!products.length &&
					!isLoading &&
					products.map((product) => (
						<ProductTableItem product={product} />
					))}
			</div>
		</section>
	);
}

export default Table;
