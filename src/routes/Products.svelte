<script>
	import { onMount } from "svelte";


    let data;

    onMount(() => {
        fetchProducts()
    })

    async function fetchProducts(){
        const res = await fetch('https://fakestoreapi.com/products');
        data = await res.json();

        console.log(data)
    }
    


</script>

<button on:click={() => {
    fetchProducts()
}}>filter</button>