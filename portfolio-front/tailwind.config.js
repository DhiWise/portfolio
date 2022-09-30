module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_900: "#2b2b2b",
        gray_600: "#767676",
        amber_600_cc: "#ffb400cc",
        bluegray_50: "#f0f0f6",
        light_green_600: "#7eb942",
        amber_600_f2: "#ffb400f2",
        amber_600: "#ffb400",
        blue_A400_19: "#2f7af919",
        green_A700_cc: "#05ff00cc",
        white_A700: "#ffffff",
        gray_50: "#fafafa",
        black_900_26: "#00000026",
      },
      borderRadius: {
        radius1: "1px",
        radius2: "2px",
        radius5: "5px",
        radius12: "12px",
        radius19: "19px",
        radius20: "20px",
        radius30: "30px",
        radius50: "50%",
      },
      boxShadow: {
        bs3: "4px 0px  10px 0px #2f7af919",
        bs2: "0px 0px  10px 0px #00000026",
        bs: "0px 1px  10px 0px #00000026",
        bs1: "0px 4px  10px 0px #00000026",
      },
      fontFamily: { inter: "Inter", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};