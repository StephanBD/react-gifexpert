export const getGifs = async (category) => {
	const apiKey = "A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K";
	const limit = 5;
	const q = encodeURI(category);
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${limit}`;
	// --------------
	const resp = await fetch(url);
	const { data } = await resp.json();
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});
	return gifs;
	// setImages(gifs);
	// setImages(
	//   data.map((img) => {
	//     return {
	//       id: img.id,
	//       title: img.title,
	//       url: img.images?.downsized_medium.url,
	//     };
	//   })
	// );
	// console.log(q);
};
