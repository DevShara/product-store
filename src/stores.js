import { writable } from 'svelte/store';

// const categories = [
// 	'All',
// 	...new Set(
// 		products?.map((item) => {
// 			return item.category;
// 		})
// 	)
// ];

export const productStore = writable([]);

export const categoryStore = writable(['All','jewelery', "men's clothing"]);

export const filterStore = writable({
	category: 'All',
	priceRange: { min: 0, max: Infinity }
});
