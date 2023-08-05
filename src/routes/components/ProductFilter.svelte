<script>
	import { filterStore, categoryStore } from '../../stores';
	import { goto } from '$app/navigation';
	export let productCategories;

	$: categories = productCategories;

	function handleCategoryChange(e) {
		filterStore.update((filters) => {
			return { ...filters, category: e.target.value };
		});
		goto('/products/1');
	}
</script>

<div class=" border-b-4 border-cyan-500">
	<div class="container m-auto py-6">
		<label for="category">
			Filter by:
			<select id="category" on:change={handleCategoryChange}>
				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
		</label>
		
	</div>
</div>
