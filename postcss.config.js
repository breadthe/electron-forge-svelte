const production = !process.env.ROLLUP_WATCH;
const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        require("postcss-import")(),
        require("tailwindcss"),
        require("autoprefixer"),
        tailwindcss('./tailwind.config.js'),
        // Only purge css on production
        production &&
        purgecss({
            content: ["./**/*.html", "./**/*.svelte"],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
};
