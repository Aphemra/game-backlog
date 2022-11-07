export default function Multiselector({ icons, setSelectedPlatforms }) {
	// Row of platform icons that can be selected or not.
	// Selected icons are added or removed from an array state.

	function handleIconClick(event, data) {
		event.target.className = event.target.className === "platform-icon" ? "platform-icon selected" : "platform-icon";
		console.log(data);
		if (event.target.className === "platform-icon selected") {
			setSelectedPlatforms((platforms) => [...platforms, data]);
			return;
		}
		if (event.target.className === "platform-icon") {
			setSelectedPlatforms((platforms) => platforms.filter((platform) => platform !== data));
			return;
		}
	}

	return (
		<div>
			{icons.map((icon, index) => {
				return (
					<img
						key={index}
						onClick={(e) => handleIconClick(e, icon.name)}
						className="platform-icon"
						src={icon.src}
						alt=""
					/>
				);
			})}
		</div>
	);
}
