export async function load({ params }) {
	//Fetch data from the API
	const res = await fetch('https://fakestoreapi.com/products');
	let products = await res.json();

	//Derive categories
	const categories = [
		...new Set(
			products?.map((item) => {
				return item.category;
			})
		)
	];


	return {
		products: products,
		categories: categories
	};
}
