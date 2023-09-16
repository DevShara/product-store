<script>
	export let image;
	export let title;
	export let price;
	export let description;
</script>

<div class=" lg:p-4 p-3 border-b-8 border-cyan-500 bg-white rounded-br-2xl shadow-xl">
	<div class=" overflow-hidden max-h-72 ">
		<img src={image} alt="" class=" max-w-full h-auto" />
	</div>
	<div class="p-3">
		<h3 class="h-2/6 text-lg font-bold">{title}</h3>
		<div class="flex lg:flex-row flex-col gap-3 lg:items-center justify-between mt-3">
			<p class=" text-md font-bold text-cyan-600">${price}</p>
			<button
				class=" bg-cyan-500 text-md px-4 py-2 rounded-full font-bold text-white hover:bg-cyan-600 transition-all"
				>Buy Now</button
			>
		</div>
		<p class="text-sm text-gray-600 font-light mt-3 text-justify">
			<!-- check whether desc long than 100 characters -->
			{#if description.length > 100}
				{description.slice(0, 100)}...
			{:else}
				{description}
			{/if}
		</p>
	</div>
</div>
