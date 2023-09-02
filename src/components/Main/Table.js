function Table() {
	const product = {
		name: "Rexona Men Antitranspirante Roll On Invisible 50ml",
		shortDescription:
			"Decile chau a las manchas blancas con Rexona Invisible.",
		id: "-ed429aa9-e815-5d1b-966d-403fc8177fac",
		images: [
			{
				alt: "Envase de desodorante Rexona Men Antitranspirante Roll On Invisible 50ml",
				asset: {
					url: "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/2d63d02809567b152afc3d57b091797f3b62c05c-5000x5000.tif?w=386&h=386&q=80&auto=format",
				},
			},
		],
		category: {
			_id: "88c47f2a01531fb5e5b25963d54e433becafd55ae72157e86256bf29",
			name: "Roll On",
		},
	};

	return (
		<section className="col-start-2 col-span-full">
			<span>119 resultados</span>
			<div className="border-b-2 border-blue-950 mt-2"></div>
			<div className="grid gridProducts">
				<div className="flex flex-col items-center text-center ">
					<img
						src={product.images[0].asset.url}
						alt={product.images.alt}
						style={{ height: "15rem" }}
					/>
					<a href="#" className="text-blue-950 font-bold">
						{product.name}{" "}
					</a>
				</div>
			</div>
		</section>
	);
}

export default Table;
