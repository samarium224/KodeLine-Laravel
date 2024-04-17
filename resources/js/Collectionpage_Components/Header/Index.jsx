import { Button, Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

// import { CollectionHeaderData } from "./Data";

const Header = ({ CollectionHeaderData }) => {
    const theme = useTheme();
    const fadeFromLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };
    const fadeFromRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <Box
            backgroundColor={theme.palette.primary.main}
            display="flex"
            justifyContent="center"
        >
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
                        xs: `calc(75vh - 56px)`,
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
                        mx: { md: 5, xl: 15 },
                        pb: { xs: 0, md: 10 },
                    }}
                >
                    <Typography
                        variant="headline"
                        component={motion.div}
                        variants={
                            CollectionHeaderData.reverseAlign
                                ? fadeFromRight
                                : fadeFromLeft
                        }
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
                        variants={
                            CollectionHeaderData.reverseAlign
                                ? fadeFromRight
                                : fadeFromLeft
                        }
                        initial="hidden"
                        animate={"visible"}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        color={theme.palette.text.white[500]}
                        sx={{ mb: { xl: 5, md: 3, xs: 20 }, width: "33%" }}
                    >
                        {CollectionHeaderData.subtitle}
                    </Typography>
                    <Box
                        component={motion.div}
                        variants={
                            CollectionHeaderData.reverseAlign
                                ? fadeFromRight
                                : fadeFromLeft
                        }
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
                                    xl: "1rem",
                                    md: "0.85rem",
                                    xs: "0.8rem",
                                },
                                px: { xl: 8, md: 5, xs: 3 },
                                py: { xl: 1.66, md: 1.2, xs: 1 },
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
