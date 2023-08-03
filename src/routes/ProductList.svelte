<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { filterStore, productStore } from '../stores';
	import Product from './Product.svelte';







	function getFilteredProducts(products, filters ){
		return products.filter(product => {
			return filters.category == 'All' |  product.category == filters.category
		})
	}

	// auto-subscription
	$: products = $productStore;
	$: filters = $filterStore;
	$: filteredProducts = getFilteredProducts(products, filters)

	// const pro = getFilteredProducts();

	// console.log(pro)

</script>

<div class=" bg-gray-200">
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
</div>
