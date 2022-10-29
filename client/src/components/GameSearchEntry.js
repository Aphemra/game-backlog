import { useState } from "react";
import ESRB from "../utils/images";
import metacriticLogo from "../images/metacritic.svg";
import calendarIcon from "../images/calendar.png";
import AddGameModal from "./AddGameModal";
import formatDate from "../utils/formatDate";

// name: game.name,
// platforms: game.platforms,
// released: game.released,
// image: game.background_image,
// metacritic: game.metacritic,
// esrb: game.esrb_rating.name,
// genres: game.genres,

export default function GameSearchEntry({ game }) {
	const rating = getRating(game.esrb || "Not Rated");

	const [hideModal, setHideModal] = useState(true);

	function toggleAddGameModal() {
		setHideModal(!hideModal);
		if (hideModal) document.body.style.overflowY = "hidden";
		if (!hideModal) document.body.style.overflowY = "";
	}

	function getRating(esrb) {
		switch (esrb) {
			case "Everyone":
				return ESRB.E;
			case "Everyone 10+":
				return ESRB.E10;
			case "Teen":
				return ESRB.T;
			case "Mature":
				return ESRB.M;
			case "Adults Only":
				return ESRB.AO;
			case "Rating Pending":
				return ESRB.RP;
			case "Not Rated":
				return ESRB.NR;
			default:
				return ESRB.NR;
		}
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
							<img src={metacriticLogo} alt="metacritic" />
							{game.metacritic || "NA"}
						</div>
						<div className="released">
							<img src={calendarIcon} alt="release date" />
							{formatDate(game.released)}
						</div>
						<div className="rating">
							<img src={rating} alt={game.esrb} title={game.esrb} />
							{game.esrb || "Not Rated"}
						</div>
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
