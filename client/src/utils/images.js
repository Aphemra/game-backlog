// ESRB Icon Imports
import E from "../images/esrb/everyone.png";
import E10 from "../images/esrb/everyone10plus.png";
import T from "../images/esrb/teen.png";
import M from "../images/esrb/mature.png";
import AO from "../images/esrb/adult.png";
import RP from "../images/esrb/pending.png";
import NR from "../images/esrb/nr.png";

// Platform Icon Imports
import PS1 from "../images/platforms/ps1.png";
import PS2 from "../images/platforms/ps2.png";
import PS3 from "../images/platforms/ps3.png";
import PS4 from "../images/platforms/ps4.png";
import PS5 from "../images/platforms/ps5.png";
import PSP from "../images/platforms/psp.png";
import VITA from "../images/platforms/vita.png";
import XBOX from "../images/platforms/xbox.png";
import XBOX_360 from "../images/platforms/xbox360.png";
import XBOX_ONE from "../images/platforms/xbox1.png";
import XBOX_SERIES_SX from "../images/platforms/xboxseries.png";
import GAMECUBE from "../images/platforms/gamecube.png";
import WII from "../images/platforms/wii.png";
import WII_U from "../images/platforms/wiiu.png";
import SWITCH from "../images/platforms/switch.png";
import DS from "../images/platforms/ds.png";
import IOS from "../images/platforms/ios.png";
import ANDROID from "../images/platforms/android.png";
import PC from "../images/platforms/pc.png";
import MAC from "../images/platforms/mac.png";
import LINUX from "../images/platforms/linux.png";

const ESRB = {
	E,
	E10,
	T,
	M,
	AO,
	RP,
	NR,
};

export const PLATFORMS = {
	PS1,
	PS2,
	PS3,
	PS4,
	PS5,
	PSP,
	VITA,
	XBOX,
	XBOX_360,
	XBOX_ONE,
	XBOX_SERIES_SX,
	GAMECUBE,
	WII,
	WII_U,
	SWITCH,
	DS,
	IOS,
	ANDROID,
	PC,
	MAC,
	LINUX,
};

export function getRating(esrb) {
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

function getPlatformIcon(platform) {
	switch (platform) {
		case "PlayStation":
			return PLATFORMS.PS1;
		case "PlayStation 2":
			return PLATFORMS.PS2;
		case "PlayStation 3":
			return PLATFORMS.PS3;
		case "PlayStation 4":
			return PLATFORMS.PS4;
		case "PlayStation 5":
			return PLATFORMS.PS5;
		case "PSP":
			return PLATFORMS.PSP;
		case "PS Vita":
			return PLATFORMS.VITA;
		case "Xbox":
			return PLATFORMS.XBOX;
		case "Xbox 360":
			return PLATFORMS.XBOX_360;
		case "Xbox One":
			return PLATFORMS.XBOX_ONE;
		case "Xbox Series S/X":
			return PLATFORMS.XBOX_SERIES_SX;
		case "GameCube":
			return PLATFORMS.GAMECUBE;
		case "Wii":
			return PLATFORMS.WII;
		case "Wii U":
			return PLATFORMS.WII_U;
		case "Nintendo Switch":
			return PLATFORMS.SWITCH;
		case "Nintendo DS":
			return PLATFORMS.DS;
		case "iOS":
			return PLATFORMS.IOS;
		case "Android":
			return PLATFORMS.ANDROID;
		case "PC":
			return PLATFORMS.PC;
		case "macOS":
			return PLATFORMS.MAC;
		case "Linux":
			return PLATFORMS.LINUX;
		default:
			break;
	}
}

export function getPlatformIcons(platforms) {
	const platformIcons = [];
	platforms.forEach((platform) => {
		platformIcons.push({ name: platform, src: getPlatformIcon(platform) });
	});
	return platformIcons;
}
