<script>
	import ProductFilter from '../../ProductFilter.svelte';
	import ProductList from '../../ProductList.svelte';
	import { page, navigating } from '$app/stores';
	import { filterStore, productStore } from '../../../stores.js';
	import Product from '../../Product.svelte';
	import {
		afterNavigate,
		beforeNavigate,
		disableScrollHandling,
		goto,
		invalidate,
		invalidateAll,
		preloadCode,
		preloadData
	} from '$app/navigation';

	export let data;


	$: items = data.paginatedProducts




	$: curPage = $page.params.page;

	function handleCLick(){
		productStore.update((products) => {
			return [...products]
		})
	}

	function getFilteredProducts(products, filters) {
		return products.filter((product) => {
			return (filters.category == 'All') | (product.category == filters.category);
		});
	}

	// productStore.update(() => {
	// 	return data.paginatedProducts;
	// });


	// $: products = $productStore;
	$: filters = $filterStore;

	$: filteredProducts = getFilteredProducts(data.paginatedProducts, filters)
	
	$: finalProducts = filteredProducts.slice(
		(curPage - 1) * 2,
		curPage * 2
	);

	let numOfPages, next_page, prev_page;

	$: if(finalProducts){
		numOfPages =   Math.ceil(filteredProducts.length / 2) ;
		console.log('numOfPages', numOfPages)
		 next_page = +curPage < numOfPages ? +curPage + 1 : null;
		 prev_page = +curPage > 1 ? +curPage - 1 : null;
	}



	

	

	
	

	// console.log('numOfPages', numOfPages)

	



</script>

<ProductList products={finalProducts} />

<!-- <div class=" container m-auto grid md:grid-cols-4 gap-6 py-12">
	{#each finalProducts as product}
		<Product
			image={product.image}
			title={product.title}
			price={product.price}
			description={product.description}
		/>
	{/each}
</div> -->

<div class="container m-auto p-3 flex flex-row gap-12 justify-center">
	{#if prev_page}
	<a  class="  bg-cyan-600 py-2 px-3 rounded-md text-white" href={`/products/${prev_page}`}>PREV</a>
{/if}


{#if next_page}

	<a  class="bg-cyan-600 py-2 px-3 rounded-md text-white" href={`/products/${next_page}`}>NEXT</a>

{/if}
</div>


