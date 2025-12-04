

import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
} satisfies Config;

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
};
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  plugins: [require('preline/plugin')],
};
