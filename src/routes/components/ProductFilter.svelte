<script>
	import { filterStore , sortStore} from '../../stores';
	import { goto } from '$app/navigation';
	export let productCategories;

	$: categories = productCategories;

	const sorts = ["Price ASC", "Price DSC" ]

	function handleGoto(e) {
		// filterStore.update((filters) => {
		// 	return { ...filters, category: e.target.value };
		// });
		goto('/products/1');
	}

	function resetFilters() {
    filterStore.set({
      category: 'All',
      priceRange: { min: 0, max: Infinity },
    });
	sortStore.set({
		sortBy: "None"
	})
  }
</script>

<div class=" border-b-4 border-cyan-500">
	<div class="container m-auto py-6 flex flex-row justify-between  w-full ">
		
		<div class=" w-4/6">
			<label for="category" class="w-1/2 ">
								<span class="w-1/5">Category:</span>

				<select id="category" class="rounded-md w-4/5"
				bind:value={$filterStore.category} 
				on:change={handleGoto}
				>
				<option value="All" selected></option>
	
					{#each categories as category}
						<option value={category}>{category}</option>
					{/each}
				</select>
			</label>
			<lable for="price" class="w-1/2 ">
				<span class="w-1/5">Price:</span>
				<input
					class="rounded-md w-2/5"
					type="number"
					id="minPrice"
					bind:value={$filterStore.priceRange.min}
					step="10"	
					min="0"
					max="1000"
					placeholder="min"
					on:change={handleGoto}
					
				/>
				<input
				class="rounded-md w-2/5"
									type="number"
					id="maxPrice"
					bind:value={$filterStore.priceRange.max}
					step="10"
					min="10"
					max="1000"
					placeholder="max"
					on:change={handleGoto}
				/>
			</lable>
		</div>
		<div class="w-1/6">
			<label for="sort">
				Sort by:
				<select id="sort" class="rounded-md"
				bind:value={$sortStore.sortBy} 
				on:change={handleGoto}
				>
				<option value="none" selected></option>
	
					{#each sorts as sort}
						<option value={sort}>{sort}</option>
					{/each}
				</select>
			</label>
		</div>
		
		<button class="bg-cyan-500 px-3 w-1/6" on:click={resetFilters}>reset</button>
	</div>
</div>
