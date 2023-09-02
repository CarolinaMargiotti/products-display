function ProductTableItem(props) {
	const product = props.product;

	const goToLink = () => {
		window.location.href = product.id;
	};

	return (
		<div
			className="flex flex-col items-center text-center"
			onClick={(e) => goToLink()}
		>
			<img
				src={product.images[0].asset.url}
				alt={product.images.alt}
				style={{ height: "15rem" }}
				className="cursor-pointer"
			/>
			<a href="#" className="text-blue-950 hover:text-teal-500 font-bold">
				{product.name}
			</a>
		</div>
	);
}

export default ProductTableItem;
