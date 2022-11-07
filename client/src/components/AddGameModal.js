import { useState } from "react";
import { getPlatformIcons } from "../utils/images";
import Multiselector from "./Multiselector";

export default function AddGameModal({ game, toggleAddGameModal }) {
	const platforms = game.platforms.map((platform) => platform.platform.name);
	// const genres = game.genres.map((genre) => genre.name).join(", ");

	const icons = getPlatformIcons(platforms);
	icons.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

	const [selectedPlatforms, setSelectedPlatforms] = useState([]);

	function handleAddGame() {
		toggleAddGameModal();
	}

	return (
		<div className="add-game-modal">
			<div onClick={toggleAddGameModal} className="modal-exit">
				&times;
			</div>
			<div className="modal-title">Add {game.name}</div>
			<Multiselector icons={icons} setSelectedPlatforms={setSelectedPlatforms} />
			<div style={{ fontSize: "0.75rem", maxWidth: "20rem" }}>Debug: {selectedPlatforms.join(", ")}</div>
			{/* <select className="backlogs-list" defaultValue="NA">
				<option disabled value="NA">
					Backlogs
				</option>
			</select> */}
			<div className="modal-buttons">
				<div className={selectedPlatforms.length === 0 ? "warning" : "hide"}>Choose a Platform!</div>
				<button disabled={selectedPlatforms.length === 0 ? true : false} onClick={handleAddGame} type="button">
					Add Game
				</button>
			</div>
		</div>
	);
}
