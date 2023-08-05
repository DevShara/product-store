import { writable } from 'svelte/store';

// export const productStore = writable([]);

// export const categoryStore = writable();

export const filterStore = writable({
	category: 'All',
	priceRange: { min: 0, max: Infinity }
});

export const sortStore = writable({
	sortBy: 'None'
});
