const test = require("../../utils/proxy");

// Figure out a way to abstract params so that multiple params can be passed if available
module.exports = async (req, res, next) => {
	params = req.body;
	try {
		const results = await test("/games", params);
		return res.json(results);
	} catch (error) {
		next(error);
	}
};
