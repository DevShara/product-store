<script>
	export let next_page;
	export let prev_page;
</script>

<div class="bg-gray-200">
	<div class="container m-auto p-6 flex flex-row gap-12 justify-center">
		{#if prev_page}
			<a class="  bg-cyan-600 py-2 px-3 rounded-md text-white" href={`/products/${prev_page}`}
				>PREV</a
			>
		{/if}

		{#if next_page}
			<a class="bg-cyan-600 py-2 px-3 rounded-md text-white" href={`/products/${next_page}`}>NEXT</a
			>
		{/if}
	</div>
</div>
