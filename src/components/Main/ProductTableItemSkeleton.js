function ProductTableItemSkeleton() {
	return (
		<div>
			<div
				className="skeleton"
				style={{ height: "15rem", width: "20rem" }}
			></div>
			<div
				className="skeleton mt-4"
				style={{ height: "2rem", width: "20rem" }}
			></div>
		</div>
	);
}

export default ProductTableItemSkeleton;
