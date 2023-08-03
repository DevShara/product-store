import { filteredProductStore } from '../../stores';

export function load({ params }) {
	let products;

	filteredProductStore.subscribe((value) => {
		products = value;
		console.log('JEW', products);
	});

	products = products.slice((params.slug - 1) * 10, params.slug * 10);

	return {
		products
	};
}
