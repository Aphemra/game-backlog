import { useEffect, useRef, useState } from "react";
import { getGames } from "../services/api";

export default function TestAPI() {
	const [results, setResults] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const searchInput = useRef("");

	useEffect(() => {
		getGames()
			.then((data) => data.results.map((game) => game.name))
			.then((games) => setResults(games));
	}, []);

	function handleSearch(event) {
		event.preventDefault();
		setIsLoading(true);
		getGames(searchInput.current.value)
			.then((data) => data.results.map((game) => game.name))
			.then((games) => setResults(games))
			.finally(() => {
				setIsLoading(false);
				searchInput.current.value = "";
			});
	}

	return (
		<div>
			<form onSubmit={handleSearch}>
				<label>Search Games: </label>
				<input ref={searchInput} type="text"></input>
				<input type="submit" value="Search"></input>
			</form>
			<ul>
				{!isLoading && results.length > 0
					? results.map((game, index) => <li key={index}>{game}</li>)
					: "Loading Games..."}
			</ul>
		</div>
	);
}
