const axios = require("axios");

const proxy = axios.create({
	method: "get",
	baseURL: "https://api.rawg.io/api",
	headers: { "Content-Type": "application/json" },
	params: { key: process.env.RAWG_API_KEY },
});

module.exports = async (url, params) => {
	return proxy(url, {
		params: params,
	})
		.then((response) => response.data)
		.catch((error) => console.log(error));
};
