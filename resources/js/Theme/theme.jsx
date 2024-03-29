import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#EED8C3",
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
            fontFamily: "'Poppins', sans-serif",
            fontSize: "3rem",
            fontWeight: "700",
        },
        title: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "2.33rem",
            fontWeight: "700",
        },
        secondaryTitle: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            fontSize: "2rem",
        },
        subtitle: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1.25rem",
            fontWeight: "500",
            lineHeight: "1.8rem",
        },
        itemdescTitle: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1rem",
            fontWeight: "500",
            textTransform: "uppercase",
            lineHeight: "1.5rem",
        },
        itemdescSubtitle: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.9rem",
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
                    fontSize: "0.85rem",
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
    },
});

export default theme;
