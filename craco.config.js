const path = require("path")
module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@main": path.resolve(__dirname, "src/main/"),
            "@utils": path.resolve(__dirname, "src/utils/"),
            "@assets": path.resolve(__dirname, "src/assets/"),
        },
    },
}
