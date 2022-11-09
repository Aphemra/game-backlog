import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3001",
	headers: { "Content-Type": "application/json" },
});

export async function getGames(searchQuery) {
	return await api
		.post("/games", { search: searchQuery })
		.then((response) => response.data)
		.catch((error) => console.log(error));
}
