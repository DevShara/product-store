<script>
	import ProductList from '../../components/ProductList.svelte';
	import { page } from '$app/stores';
	import { filterStore } from '../../../stores.js';
	import Pagination from '../../components/Pagination.svelte';
	import ProductFilter from '../../components/ProductFilter.svelte';
	export let data;

	// $: items = data.products
	$: curPage = $page.params.page;

	function getFilteredProducts(products, filters) {
		return products.filter((product) => {
			const categoryMatch = filters.category === 'All' || product.category === filters.category;
			const priceMatch = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;

			return categoryMatch && priceMatch;
		});
	}

	//Get applied filters from store
	$: filters = $filterStore;

	//Get filtered products
	$: filteredProducts = getFilteredProducts(data.products, filters);

	//Get paginated products
	$: finalProducts = filteredProducts.slice((curPage - 1) * 8, curPage * 8);

	let numOfPages, next_page, prev_page;

	//Logic for pagination
	$: if (finalProducts) {
		numOfPages = Math.ceil(filteredProducts.length / 8);
		next_page = +curPage < numOfPages ? +curPage + 1 : null;
		prev_page = +curPage > 1 ? +curPage - 1 : null;
	}
</script>

<div />
<ProductFilter productCategories={data.categories} />

<!--Display found items-->
<div class=" bg-gray-200 py-3">
	<div class="container m-auto">
		<p>{filteredProducts.length} items found</p>
	</div>
</div>

<ProductList products={finalProducts} />

<Pagination {prev_page} {next_page} />
