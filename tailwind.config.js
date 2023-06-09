const defaultTheme = require("tailwindcss/defaultTheme");
const path = require("path");
// const url = typeof window !== undefined ? window.location.origin : "";
module.exports = {
    //enabled: false,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#5461f0",
                    90: "#0e1a36",
                },
                secondary: {
                    60: "#070c3a",
                    70: "#0e1838",
                    80: "#3a405f",
                    90: "#1e224d",
                    100: "#00092a",
                },
                yollow: {
                    DEFAULT: "#ffa700",
                    80: "#ffb300",
                    90: "#e77e00",
                },
                body: "#f3f3f3",
                green: "#33cb33",
                gray: {
                    100: "#f7fafc",
                    // ...
                    900: "#1a202c",
                },
                turquoise: "#1DE3EB",
                punch: "#DF4C21",
            },
            borderRadius: {
                20: "20px",
                22: "22px",
                "4xl": [
                    "2.125rem", // 34px
                ],
                "5xl": [
                    "2.5rem", // 40px
                ],
            },
            fontSize: {
                xs: "0.75rem", // 12px
                sm: "0.875rem", // 14px
                base: "1rem", // 16px
                md: "1.563rem", // 25px
                lg: "3.438rem", // 55px
                xl: "2.5rem", // 40px
                "18base": [
                    "1.125rem", // 18px
                ],
                "20base": [
                    "1.25rem", // 20px
                ],
                "22base": [
                    "1.375rem", // 22px
                ],
                "28base": [
                    "1.75rem", // 28px
                ],
                "32base": [
                    "2rem", // 32px
                ],
                "35base": [
                    "2.188rem", // 35px
                ],
                "1xl": [
                    "3.125rem", // 50px
                ],
                "2xl": [
                    "3.75rem", // 60px
                    {
                        lineHeight: "1",
                    },
                ],
                "3xl": [
                    "5rem", // 80px
                    {
                        lineHeight: "1",
                    },
                ],
                "4xl": [
                    "7.5rem", // 120px
                    {
                        lineHeight: "1",
                    },
                ],
            },
            spacing: {
                px: "1px",
                20: "20px",
                7.5: "30px",
                23.5: "5.875rem",
                37: "9.813rem",
                15: "3.75rem",
                68: "4.25rem",
                55: "3.438rem",
                73: "4.563rem",
                80: "5rem",
                230: "14.375rem",
                260: "16.25rem",
                310: "19.375rem",
                540: "33.75rem",
                650: "40.625rem",
                780: "48.75rem",
                820: "51.25rem",
                940: "58.75rem",
            },
            lineHeight: {
                11: "3rem",
                12: "3.75rem",
                73: "4.563rem",
                112: "7rem",
            },
            zIndex: {
                n1: "-1",
            },
            fontFamily: {
                metal: ["'Metal Mania', cursive"],
                exo: ["'Exo', sans-serif"],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "15px",
                    sm: "15px",
                    lg: "15px",
                    xl: "15px",
                    "2xl": "15px",
                },
                screens: {
                    xs: "100%",
                    sm: "100%",
                    md: "768px",
                    lg: "992px",
                    xl: "1200px",
                },
            },
            letterSpacing: {
                wide: "0.02em",
            },
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1800px",
            ...defaultTheme.screens,
        },
    },

    plugins: [],
};
