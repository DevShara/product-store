<script>
	import '../../app.css';
	import Product from './Product.svelte';
	export let products;
</script>

<div class=" bg-gray-200">
	<div class=" container m-auto grid md:grid-cols-4 gap-6 md:px-0 px-6 pt-3">
		{#each products as product}
			<Product
				image={product.image}
				title={product.title}
				price={product.price}
				description={product.description}
			/>
		{/each}
	</div>
</div>
