


export async function load({ params }) {
	const res = await fetch('https://fakestoreapi.com/products');
	let products = await res.json();

	console.log('UPDATEJHADJKF')


	const curPage = parseInt(params.page);

	let paginatedProducts = products.slice((curPage - 1) * 10, curPage * 10);

	const numOfPages = Math.ceil(products.length / 10);



	const next_page = curPage < numOfPages ? curPage + 1 : null;
	const prev_page = curPage > 1 ? curPage + 1 : null;


	const categories = [
		'All',
		...new Set(
			products?.map((item) => {
				return item.category;
			})
		)
	];

	return {
		paginatedProducts: products,
		next_page: next_page,
	
	};
}
