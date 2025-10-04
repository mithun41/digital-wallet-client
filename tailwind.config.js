// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};





// // tailwind.config.js
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [
//       {
//         light: {
//           "primary": "#06923E",
//           "secondary": "#000000",
//           "card": "#FFFFFF",
//           "base-100": "#F5F7FA",
//         },
//       },
//       {
//         dark: {
//           "primary": "#34D399",
//           "secondary": "#FFFFFF",
//           "card": "#000000",
//           "base-100": "#1A1C1E",
//         },
//       },
//     ],
//   },
// };


//primary color #06923E
// Secondary color #FF6600
// bg color #F5F7FA
//Secondary Background: #E0E6ED
