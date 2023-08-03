<script>
	import { onMount } from 'svelte';

	let URL = 'https://fakestoreapi.com/products';
	let promise = fetchData();

	function fetchData() {
		return fetch(URL).then((data) => data.json());
	}

	function handleFilter(category) {
		category === 'all'
			? (URL = `https://fakestoreapi.com/products`)
			: (URL = `https://fakestoreapi.com/products/category/${category}`);

		promise = fetchData();
	}

	function resetFilter() {
		URL = `https://fakestoreapi.com/products/`;
		promise = fetchData();
	}
</script>

<button
	on:click={() => {
		handleFilter();
	}}>filter</button
>

<select
	on:change={(e) => {
		handleFilter(e.target.value);
	}}
>
	<option value="all">all</option>
	<option value="jewelery">jewelery</option>
	<option value="electronics">electronics</option>
	<option value="men's clothing">"men's clothing</option>
</select>

<button
	on:click={() => {
		resetFilter();
	}}>reset</button
>

{#await promise}
	<p>...waiting</p>
{:then data}
	<ul>
		{#each data as item}
			<li>{item.title}</li>
		{/each}
	</ul>
{:catch error}
	<p>An error occurred!</p>
{/await}
