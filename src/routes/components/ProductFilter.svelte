<script>
	import { filterStore, sortStore } from '../../stores';
	import { goto } from '$app/navigation';
	export let productCategories;

	$: categories = productCategories;

	const sorts = ['Price low to high', 'Price high to low'];

	function handleGoto(e) {
		// filterStore.update((filters) => {
		// 	return { ...filters, category: e.target.value };
		// });
		goto('/products/1');
	}

	function resetFilters() {
		filterStore.set({
			category: 'All',
			priceRange: { min: 0, max: Infinity }
		});
		sortStore.set({
			sortBy: 'None'
		});
	}
</script>

<div class=" border-b-4 border-cyan-500">
	<div class="container m-auto py-6 px-6 md:px-2 gap-6 flex items-center  flex-col md:flex-row text-sm w-full justify-between ">
		<div class= "w-full md:w-3/12 flex md:block  justify-center  md:text-center ">
			<label for="category" class="w-1/5 mr-2">Category:</label>

			<select
				id="category"
				class="rounded-md  w-4/5 md:w-3/5"
				bind:value={$filterStore.category}
				on:change={handleGoto}
			>
				<option value="All" selected >All</option>

				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
		</div>

		<div class= "w-full md:w-5/12 items-center  justify-center  flex   ">
			<label for="price" class=" mr-3 md:w-2/12 w-1/5 md:text-right ">Price: </label>
			<div class=" flex  md:w-11/12 gap-2 w-4/5  items-center">
				<input
				class="rounded-md md:w-1/2 w-full"
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
				class="rounded-md md:w-1/2 w-full"
				type="number"
				id="maxPrice"
				bind:value={$filterStore.priceRange.max}
				step="10"
				min="10"
				max="1000"
				placeholder="max"
				on:change={handleGoto}
			/>
			</div>
		</div>
	

		<div class=" w-full md:w-3/12  md:block flex md:text-center   justify-center ">
			<label for="sort" class="w-1/5 mr-2">Sort by:</label>
			<select id="sort" class="rounded-md md:w-4/6   w-4/5 " bind:value={$sortStore.sortBy} on:change={handleGoto}>
				<option value="none" selected >Best match </option>

				{#each sorts as sort}
					<option value={sort}>{sort}</option>
				{/each}
			</select> 
		</div>

		<div class= "w-full md:w-1/12  md:text-center ">
			<button class=" bg-gray-400 p-3 w-full text-md rounded-md text-white" on:click={resetFilters}
				>reset</button
			>
		</div>
	</div>
</div>
