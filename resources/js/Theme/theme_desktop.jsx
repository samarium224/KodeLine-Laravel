import { createTheme } from "@mui/material/styles";
import { breakpoint_values } from "./breakpoints";

const theme_desktop = createTheme({
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
            fontSize: "3.5rem",
            fontWeight: "600",
            lineHeight: "3.66rem",
        },
        title: {
            fontSize: "1.33rem",
            fontWeight: "500",
        },
        secondaryTitle: {
            fontWeight: "500",
            fontSize: "1.5rem",
        },
        subtitle: {
            fontSize: "1.25rem",
            fontWeight: "300",
            lineHeight: "1.75rem",
        },
        itemdescTitle: {
            fontSize: "1.15rem",
            fontWeight: "600",
            lineHeight: "1.25rem",
        },
        itemdescSubtitle: {
            fontSize: "1rem",
            fontWeight: "400",
        },
    },
    breakpoints: {
        values: {
            ...breakpoint_values,
            desktopMaxWidth: 1420,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "'Poppins', sans-serif",
                    boxShadow: "none",
                    fontSize: "0.8rem",
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

export default theme_desktop;
