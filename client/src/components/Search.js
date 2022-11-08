import { useEffect, useRef, useState } from "react";
import { getGames } from "../services/api";
import GameSearchEntry from "./GameSearchEntry";

// Remember to add other platform icons.

export default function Search() {
	const [results, setResults] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const searchInput = useRef("");

	useEffect(() => {
		getGames()
			.then((data) =>
				data.results.map((game) => {
					return {
						name: game.name,
						platforms: game.platforms,
						released: game.released,
						image: game.background_image,
						metacritic: game.metacritic,
						esrb: game.esrb_rating.name,
						genres: game.genres,
					};
				})
			)
			.then((games) => setResults(games));
	}, []);

	function handleSearch(event) {
		event.preventDefault();
		setIsLoading(true);
		getGames(searchInput.current.value)
			.then((data) =>
				data.results.map((game) => {
					return {
						name: game.name,
						platforms: game.platforms,
						released: game.released,
						image: game.background_image,
						metacritic: game.metacritic,
						esrb: game.esrb_rating?.name,
						genres: game.genres,
					};
				})
			)
			.then((games) => setResults(games))
			.finally(() => {
				setIsLoading(false);
				searchInput.current.value = "";
			});
	}

	return (
		<div className="search">
			<form className="search-form" onSubmit={handleSearch}>
				<input ref={searchInput} type="text" placeholder="Search Games..."></input>
				<input type="submit" value="Search"></input>
			</form>
			<div className="search-results">
				{!isLoading && results.length > 0 ? (
					results.map((game, index) => <GameSearchEntry key={index} game={game} />)
				) : (
					<div className="loading">Loading Games...</div>
				)}
			</div>
		</div>
	);
}
