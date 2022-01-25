// Setting up the location of the directory
const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public/scripts")
    }
}
