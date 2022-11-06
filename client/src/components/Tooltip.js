import React from "react";

export default function Tooltip({ text, width, offset }) {
	return (
		<span
			className="tooltip-text"
			style={{
				"--left-offset": offset,
				"--width": width,
			}}
		>
			{text}
		</span>
	);
}
