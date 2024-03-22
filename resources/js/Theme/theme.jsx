import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#EAD1BB",
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
    containerMarginWidth: 20,
    typography: {
        headline: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "3.5rem",
            fontWeight: "800",
        },
        title: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "2.5rem",
            fontWeight: "800",
        },
        secondaryTitle: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "800",
            fontSize: "2.25rem",
        },
        subtitle: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1.5rem",
            fontWeight: "500",
            lineHeight: "2rem",
        },
        itemdescTitle: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1.1rem",
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
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "'Poppins', sans-serif",
                    boxShadow: "none",
                    fontSize: "1rem",
                    fontWeight: "500",
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
