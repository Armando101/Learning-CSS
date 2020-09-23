module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer')
	],
	variants: {
		opacity: ['resposive', 'hover', 'focus', 'disabled']
	}
}