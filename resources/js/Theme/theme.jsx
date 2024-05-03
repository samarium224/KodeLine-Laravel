import { createTheme } from "@mui/material/styles";

import { breakpoint_values } from "./breakpoints";
import { Typography_variants } from "./theme_builder/Typography_variants";
import { Button_overrides } from "./theme_builder/Button_overrides";

const theme = createTheme({
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
    typography: Typography_variants(),
    breakpoints: {
        values: breakpoint_values,
    },
    components: {
        MuiButton: {
            styleOverrides: Button_overrides(),
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

export default theme;
