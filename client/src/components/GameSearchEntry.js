import { useRef, useState } from "react";
import metacriticLogo from "../images/metacritic.svg";

// name: game.name,
// platforms: game.platforms,
// released: game.released,
// image: game.background_image,
// metacritic: game.metacritic,
// esrb: game.esrb_rating.name,
// genres: game.genres,

export default function GameSearchEntry({ game }) {
	const genres = game.genres.map((genre) => genre.name).join(", ");
	const platforms = game.platforms.map((platform) => platform.platform.name);

	const [platform, setPlatform] = useState("NA");

	const platformInput = useRef();

	function handlePlatformChange(event) {
		setPlatform(event.target.value);
	}

	return (
		<div className="entry">
			<img className="image" src={game.image} alt={game.name} />
			<div className="content">
				<div className="top">
					<div className="name">{game.name}</div>
				</div>
				<div className="bottom">
					<div className="metacritic">
						<img src={metacriticLogo} alt="metacritic logo" />
						{game.metacritic || "NA"}
					</div>
					<div className="released">Released {game.released}</div>
					<div className="rating">ESRB: {game.esrb || "Unrated"}</div>
					{/* <div className="genres">Genres {genres}</div> */}
					<select ref={platformInput} className="platforms" defaultValue="NA" onChange={handlePlatformChange}>
						<option disabled value="NA">
							Platforms
						</option>
						{platforms.map((platform, index) => {
							return (
								<option key={index} value={platform}>
									{platform}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className="buttons">
				<div
					title={platform === "NA" ? "Select a platform to add this game to your backlog!" : ""}
					className={platform === "NA" ? "add-game disabled" : "add-game"}
				>
					+
				</div>
			</div>
		</div>
	);
}
