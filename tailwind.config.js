/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			boxShadow: {
				insetTeal: "inset 0rem 0rem 0.5px 3px rgb(20, 184, 166, 0.4);",
			},
		},
	},
	plugins: [],
};
