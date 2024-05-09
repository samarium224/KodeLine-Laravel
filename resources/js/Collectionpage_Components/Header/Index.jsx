import {
    Button,
    Box,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

// import { CollectionHeaderData } from "./Data";

const Header = ({ CollectionHeaderData }) => {
    const theme = useTheme();
    const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

    const fadeFromBottom = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    const fadeFromLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };
    const fadeFromRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    const animationVariant = isMobileScreen
        ? fadeFromBottom
        : CollectionHeaderData.reverseAlign
        ? fadeFromRight
        : fadeFromLeft;

    return (
        <Box display="flex" justifyContent="center">
            <Box
                sx={{
                    backgroundImage: {
                        xs: `url("${CollectionHeaderData.mobileBackgroundImgURL}")`,
                        md: `url("${CollectionHeaderData.backgroundImgURL}")`,
                    },
                    backgroundPosition: CollectionHeaderData.backgroundPosition,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",

                    width: { xs: "100%", maxAllowableWidth: "1960px" },
                    height: {
                        xl: `calc(60vh - 56px)`,
                        md: `calc(67.5vh - 49px)`,
                        xs: `calc(60vh - 30px + 1px)`,
                        maxAllowableWidth: "700px",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: { xs: "center", md: "end" },
                        lineHeight: "50px",
                        height: "100%",
                        alignItems: {
                            xs: "center",
                            md: CollectionHeaderData.reverseAlign
                                ? "flex-end"
                                : "flex-start",
                        },
                        textAlign: {
                            xs: "center",
                            md: CollectionHeaderData.reverseAlign
                                ? "right"
                                : "left",
                        },
                        mx: "6.66vw",
                        pb: { xs: 0, md: 12.5, lg: 15 },
                        pt: { xs: 12.5, md: 0 },
                        position: "relative",
                    }}
                >
                    <Typography
                        variant="headline"
                        component={motion.div}
                        variants={animationVariant}
                        initial="hidden"
                        animate={"visible"}
                        color={theme.palette.text.white[500]}
                        transition={{ duration: 0.4, delay: 0 }}
                        sx={{ mb: 2, width: "95%" }}
                    >
                        {CollectionHeaderData.title}
                    </Typography>
                    <Typography
                        variant="subtitle"
                        component={motion.div}
                        variants={animationVariant}
                        initial="hidden"
                        animate={"visible"}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        color={theme.palette.text.white[500]}
                        sx={{
                            mb: { xl: 5, md: 3, xs: 5 },
                            width: { xs: "80%", md: "33%" },
                        }}
                    >
                        {CollectionHeaderData.subtitle}
                    </Typography>
                    <Box
                        component={motion.div}
                        variants={animationVariant}
                        initial="hidden"
                        animate={"visible"}
                        transition={{ duration: 0.4, delay: 0.66 }}
                    >
                        <Button
                            sx={{
                                color: theme.palette.text.white[500],
                                backgroundColor: "transparent",
                                border: `2px solid ${theme.palette.text.white[500]}`,
                                fontWeight: "500",
                                fontSize: {
                                    xl: "1.1rem",
                                    lg: "1rem",
                                    xs: "0.75rem",
                                },
                                px: { xl: 5, md: 5, xs: 4 },
                                py: { xl: 1.5, md: 1.2, xs: 1 },
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.text.white[500],
                                    color: theme.palette.text.grey[500],
                                },
                            }}
                        >
                            Shop now
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
