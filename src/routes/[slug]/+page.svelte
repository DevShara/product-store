<script>
	import ProductList from '../ProductList.svelte';
	export let data;
	import { filteredProductStore } from '../../stores';

	let products;

	filteredProductStore.subscribe((value) => {
		products = value;
		console.log('JEW', products);
	});
</script>

<ProductList finalData={data.products} />
