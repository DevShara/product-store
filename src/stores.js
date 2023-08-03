import { writable } from 'svelte/store';

let data;
const res = await fetch('https://fakestoreapi.com/products');
data = await res.json();

const products = data;

export const productStore = writable(products);
