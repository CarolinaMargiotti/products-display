import Skeleton from "./Skeleton";

function ProductTableItemSkeleton() {
	return (
		<div>
			<Skeleton width="20rem" height="15rem" />
			<div className="mt-2">
				<Skeleton width="20rem" height="2rem" />
			</div>
		</div>
	);
}

export default ProductTableItemSkeleton;
