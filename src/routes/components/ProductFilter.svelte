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

	function resetFilters() {
    filterStore.set({
      category: 'All',
      priceRange: { min: 0, max: Infinity },
    });
  }
</script>

<div class=" border-b-4 border-cyan-500">
	<div class="container m-auto py-6 flex flex-row justify-between  ">
		<label for="category">
			Category:
			<select id="category" class="rounded-md"
			bind:value={$filterStore.category} >
			<option value="All" selected></option>

				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
		</label>
		<lable for="price">
			Price:
			<input
				class="rounded-md"
				type="number"
				id="minPrice"
				bind:value={$filterStore.priceRange.min}
				step="10"	
				min="0"
				max="1000"
				placeholder="min"
				on:change={() => {
					goto('/products/1');
				}}
				
			/>
			<input
				class="rounded-md"
				type="number"
				id="maxPrice"
				bind:value={$filterStore.priceRange.max}
				step="10"
				min="10"
				max="1000"
				placeholder="max"
				on:change={() => {
					goto('/products/1');
				}}
			/>
		</lable>
		<button class="bg-cyan-500 px-3" on:click={resetFilters}>reset</button>
	</div>
</div>
