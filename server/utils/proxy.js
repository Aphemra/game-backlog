const axios = require("axios");

const proxy = axios.create({
	method: "get",
	baseURL: "https://api.rawg.io/api",
	headers: { "Content-Type": "application/json" },
	params: { key: process.env.RAWG_API_KEY },
});

// TEST PROXY, CHANGE LATER
module.exports = async (params) => {
	return proxy("/games", {
		params: params,
	})
		.then((response) => response.data)
		.catch((error) => console.log(error));
};
