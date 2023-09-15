export async function load() {
	return new Promise((fulfil) => {
		setTimeout(fulfil, 9000);
	});
}
