export default function formatDate(dateString) {
	const dateArray = dateString.split("-");

	const year = dateArray[0];
	const month = dateArray[1];
	const day = dateArray[2];

	let namedMonth;

	switch (month) {
		case "01":
			namedMonth = "January";
			break;
		case "02":
			namedMonth = "February";
			break;
		case "03":
			namedMonth = "March";
			break;
		case "04":
			namedMonth = "April";
			break;
		case "05":
			namedMonth = "May";
			break;
		case "06":
			namedMonth = "June";
			break;
		case "07":
			namedMonth = "July";
			break;
		case "08":
			namedMonth = "August";
			break;
		case "09":
			namedMonth = "September";
			break;
		case "10":
			namedMonth = "October";
			break;
		case "11":
			namedMonth = "November";
			break;
		case "12":
			namedMonth = "December";
			break;
		default:
			namedMonth = "January";
			break;
	}

	return `${namedMonth} ${day}, ${year}`;
}
