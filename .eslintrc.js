const base = require("@mendix/pluggable-widgets-tools/configs/eslint.ts.base.json");

module.exports = {
    ...base,
    rules: {
        "@typescript-eslint/interface-name-prefix": "off"
    }
};
