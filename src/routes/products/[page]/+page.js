export async function load({ params }) {
	//Fetch data from the API
	const res = await fetch('http://127.0.0.1:3000/api');
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
