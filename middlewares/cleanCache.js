const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
	await next(); // allow route handler to run first, then once it is finished, clear redis cache

	clearHash(req.user.id);
}