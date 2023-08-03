<script>
	import { onMount } from 'svelte';
	import { productStore } from '../stores';

	$: products = $productStore;
</script>

<ul>
	{#each products as product}
		<li>{product.title}</li>
	{/each}
</ul>
