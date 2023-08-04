<script>
	import { filterStore, categoryStore } from '../stores';
	import { goto } from '$app/navigation';
	$: categories = $categoryStore;

	function handleCategoryChange(e) {
		console.log('FILTER CHANGE')
		filterStore.update((filters) => {
			return { ...filters, category: e.target.value };
		});
		goto('/products/1');

	}
</script>

<div>
	<div class="container m-auto py-6">
		<p>{$filterStore.category}</p>
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
