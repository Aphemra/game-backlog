import { useRef, useState } from "react";

export default function AddGameModal({ game, toggleAddGameModal }) {
	const platforms = game.platforms.map((platform) => platform.platform.name);
	// const genres = game.genres.map((genre) => genre.name).join(", ");

	const [platform, setPlatform] = useState("NA");

	const platformInput = useRef();

	function handlePlatformChange(event) {
		setPlatform(event.target.value);
	}

	function handleAddGame() {
		toggleAddGameModal();
		setPlatform("NA");
		platformInput.current.value = "NA";
	}

	return (
		<div className="add-game-modal">
			<div onClick={toggleAddGameModal} className="modal-exit">
				&times;
			</div>
			<div className="modal-title">Add {game.name}</div>
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
			<select className="backlogs-list" defaultValue="NA">
				<option disabled value="NA">
					Backlogs
				</option>
			</select>
			<div className="modal-buttons">
				<div className={platform === "NA" ? "warning" : "hide"}>Choose a Platform!</div>
				<button disabled={platform === "NA" ? true : false} onClick={handleAddGame} type="button">
					Add Game
				</button>
			</div>
		</div>
	);
}
