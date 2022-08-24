module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	mode: 'jit',
	theme: {
	  extend: {
		'main-text': ['"Poppins"', 'sans-serif'],
	  },
	  screens: {
		'sm': '640px',
		'md': '768px',
		'lg': '1024px',
		'xl': '1280px',
		'2xl': '1536px',
		'4xl': '2560px'
	  },
	  colors: {
		transparent: 'transparent',
		'black': '#151416',
		'grey': '#BEBBC5',
		'darkgrey': '#1B1B1B',
		'white': {
			DEFAULT: '#FFFFFF',
			'light': '#FFFFFF',
		},
		'primary': {
			DEFAULT: '#5907E1',
			'light': '#A46DFF',
		},
	  }
	},
	plugins: [],
}
