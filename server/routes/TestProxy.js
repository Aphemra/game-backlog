const test = require("../utils/proxy");

module.exports = async (req, res, next) => {
	try {
		const results = await test();
		return res.json(results);
	} catch (error) {
		next(error);
	}
};
