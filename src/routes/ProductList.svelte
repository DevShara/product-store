<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { filterStore, productStore, filteredProductStore } from '../stores';
	import Product from './Product.svelte';
	export let finalData;

	function getFilteredProducts(products, filters) {
		const pro = products.filter((product) => {
			return (filters.category == 'All') | (product.category == filters.category);
		});

		filteredProductStore.update(() => {
			const pro2 = ['asdasd'];
			return pro;
		});

		return pro;
	}

	// auto-subscription
	$: products = $productStore;
	$: filters = $filterStore;
	// $: filteredProducts =

	$: filteredProducts = getFilteredProducts(products, filters);
	$: finalData2 = finalData;
	console.log('asdasd', filteredProducts);

	// const pro = getFilteredProducts();

	// console.log(pro)
</script>

<div class=" bg-gray-200">
	<div class=" container m-auto grid md:grid-cols-4 gap-6 py-12">
		{#each finalData as product}
			<Product
				image={product.image}
				title={product.title}
				price={product.price}
				description={product.description}
			/>
		{/each}
	</div>
	{#each filteredProducts as product}
		<li>{product.title}</li>
	{/each}
</div>
