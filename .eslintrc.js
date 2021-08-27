module.exports = {
	globals: {
		__PATH_PREFIX__: true,
	},
	extends: "plugin:vue/strongly-recommended",
	rules: {
		indent: ["warn", "tab"],
		semi: ["warn", "always"],
		quotes: ["warn", "double"],
		"vue/html-indent": ["warn", "tab"],
		"vue/max-attributes-per-line": ["off"],
		"vue/html-self-closing": ["off"],
		"vue/singleline-html-element-content-newline": ["off"],
	},
};
