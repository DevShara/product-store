<script>
	import ProductFilter from '../../ProductFilter.svelte';
	import ProductList from '../../ProductList.svelte';
	import { page, navigating } from '$app/stores';
	import { filterStore, productStore } from '../../../stores.js';
	import Product from '../../Product.svelte';
	import {
		afterNavigate,
		beforeNavigate,
		disableScrollHandling,
		goto,
		invalidate,
		invalidateAll,
		preloadCode,
		preloadData
	} from '$app/navigation';

	export let data;
	const curPage = $page.params.page;
	console.log($page.url.pathname);

	function getFilteredProducts(products, filters, pageNo) {
		console.log(pageNo);
		return products.filter((product) => {
			return (filters.category == 'All') | (product.category == filters.category);
		});
	}

	productStore.update(() => {
		return data.paginatedProducts;
	});

	$: products = $productStore;
	$: filters = $filterStore;
	$: pageNo = $page.params.page;

	$: filteredProducts = getFilteredProducts(products, filters, pageNo).slice(
		(curPage - 1) * 2,
		curPage * 2
	);

	afterNavigate(() => {
		console.log($page.params.page);
	});
</script>

<ProductFilter />
<!-- <ProductList products={filteredProducts} /> -->

<div class=" container m-auto grid md:grid-cols-4 gap-6 py-12">
	{#each filteredProducts as product}
		<Product
			image={product.image}
			title={product.title}
			price={product.price}
			description={product.description}
		/>
	{/each}
</div>

<div class=" container m-auto py-9">
	<button
		on:click={() => {
			goto('/products/2');
		}}><a href="/products/2">Next</a></button
	>
</div>
