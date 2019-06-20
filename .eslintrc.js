module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	env: {
		jest: true,
		browser: true
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'react-app',
		'plugin:prettier/recommended'
	],
	plugins: ['@typescript-eslint', 'react']
};
