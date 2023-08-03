import { writable } from 'svelte/store';

let products;
const res = await fetch('https://fakestoreapi.com/products');
products = await res.json();

const categories = [
	'All',
	...new Set(products?.map(item => {
		return item.category
	}))
]

console.log(categories)

export const productStore = writable(products);

export const categoryStore = writable(categories)


export const filterStore = writable({
	category: 'All',
	priceRange: { min: 0, max: Infinity }
});
