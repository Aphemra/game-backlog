import { useState } from "react";
import { getRating } from "../utils/images";
import metacriticLogo from "../images/metacritic.svg";
import calendarIcon from "../images/calendar.png";
import AddGameModal from "./AddGameModal";
import formatDate from "../utils/formatDate";
import Tooltip from "./Tooltip";

// name: game.name,
// platforms: game.platforms,
// released: game.released,
// image: game.background_image,
// metacritic: game.metacritic,
// esrb: game.esrb_rating.name,
// genres: game.genres,

export default function GameSearchEntry({ game }) {
	const rating = getRating(game.esrb || "Not Rated");
	const date = formatDate(game.released);

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
						<div className="rating tooltip-parent">
							<img src={rating} alt={game.esrb} />
							<Tooltip text={game.esrb || "Not Rated"} width="4.5rem" offset="-100%" />
						</div>
						<div className="metacritic">
							<img src={metacriticLogo} alt="metacritic" />
							{game.metacritic || "NA"}
						</div>
						<div className="released">
							<img src={calendarIcon} alt="release date" />
							{date}
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
