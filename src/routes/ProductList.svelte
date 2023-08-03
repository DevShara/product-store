<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { productStore } from '../stores';
	import Product from './Product.svelte';

	$: products = $productStore;
</script>

<div class=" bg-gray-200">
	<div class=" container m-auto grid md:grid-cols-4 gap-6">
		{#each products as product}
			<Product image={product.image} title={product.title} price={product.price} description={product.description} />
		{/each}
	</div>
</div>
