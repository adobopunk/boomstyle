const now = String(Date.now());

module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget('./tailwind.config.js');
	eleventyConfig.addWatchTarget('./src/assets/css/index.css');

	eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });

	eleventyConfig.addShortcode('version', function () {
		return now;
	});

	eleventyConfig.addFilter('sort_by_date_and_order', (collection) => {
		return collection.sort((a, b) => {
			// First, sort by date
			let dateComparison =
				new Date(a.data.date) - new Date(b.data.date);
			if (dateComparison !== 0) {
				return dateComparison;
			}

			// If dates are the same, sort by order
			return a.data.order - b.data.order;
		});
	});
};
