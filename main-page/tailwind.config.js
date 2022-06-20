module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Nunito'],
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translateX(0px) translateY(0px) scale(1)',
					},
					'25%': {
						transform: 'translateX(45px) translateY(-25px) scale(1.1)',
					},
					'50%': {
						transform: 'translateX(20px) translateY(5px) scale(0.9)',
					},
					'75%': {
						transform: 'translateX(50px) translateY(25px) scale(1.1)',
					},
					'100%': {
						transform: 'translateX(0px) translateY(0px) scale(1)',
					},
				},
			},
			animation: {
				blob: 'blob 7s linear infinite',
			},
		},
	},
	plugins: [],
};
