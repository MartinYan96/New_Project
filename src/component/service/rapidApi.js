const url = 'https://fortnitecosmetics.p.rapidapi.com/skins';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '1b3f8376c7msh84e810287848f62p1c06c4jsnf829000d2e5e',
		'X-RapidAPI-Host': 'fortnitecosmetics.p.rapidapi.com'
	},
	body: {}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
