/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // 全局字体为 Roboto
      },
      fontSize: {
        base: "0.9rem", // 16px
        sm: "0.8rem", // 14px
        xs: "0.7rem", // 12px
      },
      gridTemplateColumns: {
        "70/30": "70% 28%", // 你自定义的网格比例保留
      },
    },
  },
  plugins: [],
};
