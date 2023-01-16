/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {},
  },
  prefix: "dt-",
  plugins: [
    plugin(function ({ addBase, theme }) {
      const heading = {
        h1: { fontSize: theme("spacing.6") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      };

      addBase(heading);
    }),
  ],
  presets: [require("./preset/tailwind.preset")],
};
