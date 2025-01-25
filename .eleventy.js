const now = String(Date.now());

module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget('./tailwind.config.js');
	eleventyConfig.addWatchTarget('./src/assets/css/index.css');

	// Pass through all assets in ./src/assets, including subfolders
	eleventyConfig.addPassthroughCopy('./src/assets');

	eleventyConfig.addShortcode('version', function () {
		return now;
	});
};
