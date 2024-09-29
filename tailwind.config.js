/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   mode: "jit",
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   // Other Tailwind configurations...
// };
