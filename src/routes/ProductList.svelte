<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { productStore } from '../stores';

	$: products = $productStore;
</script>

<div class=" bg-gray-300">
	<div class=" container m-auto grid md:grid-cols-4 gap-6">
		{#each products as product}
			<div class=" lg:p-4 p-3 border-b-8 border-cyan-500 bg-white rounded-br-2xl">
				<div class=" overflow-hidden h-48">
					<img src={product.image} alt="" class=" max-w-full h-auto" />
				</div>
				<div class="p-3">
					<h3 class="h-2/6 text-xl font-bold">{product.title}</h3>
					<div class="flex lg:flex-row flex-col gap-3 justify-between mt-3">
						<p class=" text-lg font-bold text-cyan-600">${product.price}</p>
						<button
							class=" bg-cyan-500 px-5 py-3 rounded-full font-bold text-white hover:bg-cyan-600 transition-all"
							>Buy Now</button
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
