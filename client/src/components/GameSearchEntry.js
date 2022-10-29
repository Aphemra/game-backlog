import { useRef, useState } from "react";
import metacriticLogo from "../images/metacritic.svg";
import AddGameModal from "./AddGameModal";

// name: game.name,
// platforms: game.platforms,
// released: game.released,
// image: game.background_image,
// metacritic: game.metacritic,
// esrb: game.esrb_rating.name,
// genres: game.genres,

export default function GameSearchEntry({ game }) {
	const genres = game.genres.map((genre) => genre.name).join(", ");

	const [hideModal, setHideModal] = useState(true);

	function toggleAddGameModal() {
		setHideModal(!hideModal);
		if (hideModal) document.body.style.overflowY = "hidden";
		if (!hideModal) document.body.style.overflowY = "";
	}

	return (
		<>
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
						<div className="genres">{genres}</div>
					</div>
				</div>
				<div className="buttons">
					<div onClick={toggleAddGameModal} className="add-game">
						+
					</div>
				</div>
			</div>
			<div className={hideModal ? "hide" : "modal"}>
				<div onClick={toggleAddGameModal} className="gray-out"></div>
				<AddGameModal game={game} toggleAddGameModal={toggleAddGameModal} />
			</div>
		</>
	);
}
