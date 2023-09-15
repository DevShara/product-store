<script>
	import { fade, fly } from 'svelte/transition';
	import ProductFilter from '../../components/ProductFilter.svelte';
	export let data;
	import { page, navigating } from '$app/stores';
	import { filterStore } from '../../../stores';
	import { sortStore } from '../../../stores';
	$: filters = $filterStore;
	$: sorts = $sortStore;
</script>

<ProductFilter productCategories={$page.data.categories} />

{#key $navigating}
	<div in:fade>
		<slot />
	</div>
{/key}
