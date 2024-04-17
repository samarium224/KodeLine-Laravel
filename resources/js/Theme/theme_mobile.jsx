import { createTheme } from "@mui/material/styles";

const theme_mobile = createTheme({
    palette: {
        primary: {
            main: "#53555a",
        },
        text: {
            grey: {
                100: "#e1e1e3",
                200: "#c3c3c6",
                300: "#a4a6aa",
                400: "#86888d",
                500: "#686a71",
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
            fontSize: "1.5rem",
            fontWeight: "700",
            lineHeight: "2.25rem",
        },
        title: {
            fontSize: "1.5rem",
            fontWeight: "600",
        },
        secondaryTitle: {
            fontSize: "1.5rem",
            fontWeight: "600",
        },
        subtitle: {
            fontSize: "0.75rem",
            fontWeight: "400",
            lineHeight: "1rem",
        },
        itemdescTitle: {
            fontSize: "0.875rem",
            fontWeight: "400",
            textTransform: "uppercase",
            lineHeight: "1.33rem",
        },
        itemdescSubtitle: {
            fontSize: "0.66rem",
            fontWeight: "400",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            desktopMaxWidth: 1420,
            maxAllowableWidth: 1960,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "'Poppins', sans-serif",
                    boxShadow: "none",
                    fontSize: "0.7rem",
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

export default theme_mobile;
