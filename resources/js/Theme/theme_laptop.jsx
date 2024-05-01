import { createTheme } from "@mui/material/styles";
import { breakpoint_values } from "./breakpoints";

const theme_laptop = createTheme({
    palette: {
        primary: {
            main: "#53555a",
        },
        secondary: {
            main: "#1d1d1b",
        },
        text: {
            grey: {
                100: "#e1e1e3",
                200: "#c3c3c6",
                300: "#a4a6aa",
                400: "#86888d",
                500: "#5c5c5c",
                600: "#53555a",
                700: "#3e4044",
                800: "#2a2a2d",
                900: "#151517",
            },
            white: {
                100: "#fefefe",
                200: "#fdfdfd",
                300: "#fcfcfc",
                400: "#fbfbfb",
                500: "#fafafa",
                600: "#c8c8c8",
                700: "#969696",
                800: "#646464",
                900: "#323232",
            },
        },
    },
    typography: {
        headline: {
            fontSize: "2.75rem",
            lineHeight: "2.85rem",
            fontWeight: "600",
        },
        title: {
            fontSize: "1.25rem",
            fontWeight: "500",
        },
        secondaryTitle: {
            fontWeight: "500",
            fontSize: "1.25rem",
        },
        subtitle: {
            fontSize: "1.05rem",
            fontWeight: "300",
            lineHeight: "1.55rem",
        },
        itemdescTitle: {
            fontSize: "1rem",
            fontWeight: "500",
            textTransform: "uppercase",
            lineHeight: "1.5rem",
        },
        itemdescSubtitle: {
            fontSize: "0.9rem",
            fontWeight: "400",
        },
    },
    breakpoints: {
        values: breakpoint_values,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "'Poppins', sans-serif",
                    boxShadow: "none",
                    fontSize: "0.66rem",
                    fontWeight: "400",
                    borderRadius: "0px",
                },
                contained: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                    },
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(255, 255, 255, 0.75)",
                    backdropFilter: "blur(1.5px)",
                },
            },
        },
    },
});

export default theme_laptop;
