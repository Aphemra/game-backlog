import { useRef, useState } from "react";

export default function AddGameModal({ game, toggleAddGameModal }) {
	const platforms = game.platforms.map((platform) => platform.platform.name);

	const [platform, setPlatform] = useState("NA");

	const platformInput = useRef();

	function handlePlatformChange(event) {
		setPlatform(event.target.value);
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
		</div>
	);
}
