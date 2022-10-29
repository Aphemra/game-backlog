export default function formatDate(dateString) {
	const dateArray = dateString.split("-");

	const year = dateArray[0];
	const month = dateArray[1];

	let namedMonth;

	switch (month) {
		case "01":
			namedMonth = "Jan.";
			break;
		case "02":
			namedMonth = "Feb.";
			break;
		case "03":
			namedMonth = "Mar.";
			break;
		case "04":
			namedMonth = "Apr.";
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
			namedMonth = "Aug.";
			break;
		case "09":
			namedMonth = "Sept.";
			break;
		case "10":
			namedMonth = "Oct.";
			break;
		case "11":
			namedMonth = "Nov.";
			break;
		case "12":
			namedMonth = "Dec.";
			break;
		default:
			namedMonth = "Jan.";
			break;
	}

	return `${namedMonth} ${year}`;
}
