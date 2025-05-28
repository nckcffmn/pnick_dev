module.exports = function(eleventyConfig) {
    // Add your custom configurations here

    // Copy static files to the output folder
    eleventyConfig.addPassthroughCopy("./src/css"); // Copy CSS files
    eleventyConfig.addPassthroughCopy("./src/icons"); // Copy icon files
    eleventyConfig.addPassthroughCopy("./src/files"); // Copy uploaded files

    // Return the configuration object
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src", // Source folder
            output: "dist" // Output folder
        }
    };
};