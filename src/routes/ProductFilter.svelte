<script>
	import { filterStore, categoryStore} from '../stores';

	

	$: categories = $categoryStore;

	function handleCategoryChange(e){
		filterStore.update(filters => {
			return {...filters, category:e.target.value}
		})
	}

	
</script>

<div>
	<div class="container m-auto py-6" >
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
