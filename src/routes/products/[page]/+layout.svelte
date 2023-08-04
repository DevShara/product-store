<script>

	import ProductFilter from "../../ProductFilter.svelte";
	import { page, navigating } from '$app/stores';


</script>

<div class="layout">
    <ProductFilter />

	<main>
		<slot />
	</main>
</div>


<!-- <div class=" container m-auto py-9">
	<nav>
		<a href="/products/1" >
			home
		</a>
	
		<a href="/products/2" >
			about
		</a>
	</nav>
</div> -->
