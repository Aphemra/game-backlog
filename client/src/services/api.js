import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3001",
	headers: { "Content-Type": "application/json" },
});

// This needs to simplified so the searchQuery is not so specific and it instead can handle multiple param values
export async function getGames(searchQuery) {
	return await api
		.post("/games", { search: searchQuery })
		.then((response) => response.data)
		.catch((error) => console.log(error));
}
