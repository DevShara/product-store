<script>
	import ProductList from '../../components/ProductList.svelte';
	import { page } from '$app/stores';
	import { filterStore, sortStore } from '../../../stores.js';
	import Pagination from '../../components/Pagination.svelte';
	import ProductFilter from '../../components/ProductFilter.svelte';
	export let data;


	// $: items = data.products
	$: curPage = $page.params.page;

	//Filter given products by category & price range
	function getFilteredProducts(products, filters) {
		return products.filter((product) => {
			const categoryMatch = filters.category === 'All' || product.category === filters.category;
			const priceMatch =
				product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;

			return categoryMatch && priceMatch;
		});
	}

	//Sort given products by price
	function getSortedProducts(products, sorts) {
		let newProducts = products;

		if (sorts.sortBy === 'Price low to high') {
			newProducts = [...products].sort((a, b) => {
				return a.price - b.price;
			});
		} else if (sorts.sortBy === 'Price high to low') {
			newProducts = [...products].sort((a, b) => {
				return b.price - a.price;
			});
		} else {
			newProducts = [...products].sort((a) => {
				return a;
			});
		}

		return newProducts;
	}

	//Get applied filters from store
	$: filters = $filterStore;
	$: sorts = $sortStore;

	//Get filtered products
	$: filteredProducts = getFilteredProducts(data.products, filters);

	$: sortedProducts = getSortedProducts(filteredProducts, sorts);


	//Get paginated products
	$: finalProducts = sortedProducts.slice((curPage - 1) * 10, curPage * 10);

	let numOfPages, next_page, prev_page;

	//Logic for pagination
	$: {
		numOfPages = Math.ceil(filteredProducts.length / 10);
		next_page = +curPage < numOfPages ? +curPage + 1 : null;
		prev_page = +curPage > 1 ? +curPage - 1 : null;
	}
</script>

<div />
<ProductFilter productCategories={data.categories} />

<!--Display found items-->
<div class=" bg-gray-200 py-3">
	<div class="container m-auto  md:px-0 px-6 ">
		<p>{filteredProducts.length} items found</p>
	</div>
</div>

<ProductList products={finalProducts} />

<Pagination {prev_page} {next_page} />


