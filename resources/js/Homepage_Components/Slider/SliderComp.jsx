import React from "react";
import {
    Box,
    Button,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const SliderComp = ({
    collectionID,
    imgURL,
    mobileImgURL,
    title,
    subtitle,
    reverseAlign = false,
    backgroundPosition = "right bottom",
    isActive,
}) => {
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

    const animationVariants = isMobileScreen
        ? fadeFromBottom
        : reverseAlign
        ? fadeFromRight
        : fadeFromLeft;

    return (
        <Box backgroundColor={theme.palette.primary.main} width="100vw">
            <Box
                sx={{
                    mx: "auto",
                    backgroundImage: {
                        xs: `url("${mobileImgURL}")`,
                        md: `url("${imgURL}")`,
                    },
                    backgroundPosition: backgroundPosition,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: { xs: "100%", maxAllowableWidth: "1960px" },
                    height: {
                        xl: `calc(85vh - 56px)`,
                        md: `calc(85vh - 49px)`,
                        xs: `calc(82.5vh - 28px + 1px)`,
                        maxAllowableWidth: "700px",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: isMobileScreen ? "center" : "flex-end",
                        lineHeight: "50px",
                        height: "100%",
                        alignItems: {
                            xs: "center",
                            md: reverseAlign ? "flex-end" : "flex-start",
                        },
                        textAlign: {
                            xs: "center",
                            md: reverseAlign ? "right" : "left",
                        },
                        mx: { md: 15, xl: 25 },
                        pb: { xs: 0, md: 15 },
                    }}
                >
                    <Typography
                        variant="headline"
                        component={motion.div}
                        variants={animationVariants}
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                        color={theme.palette.text.white[500]}
                        transition={{ duration: 0.4, delay: 0 }}
                        sx={{ mb: 2, width: "95%" }}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    <Typography
                        variant="subtitle"
                        component={motion.div}
                        variants={animationVariants}
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        color={theme.palette.text.white[500]}
                        sx={{
                            mb: { xl: 5, md: 3, xs: 20 },
                            width: { xs: "95%", md: "33%" },
                        }}
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                    />

                    <Box
                        component={motion.div}
                        variants={animationVariants}
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
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
                            onClick={() => {
                                console.log("hello");
                                const targetElement =
                                    document.getElementById("collection-id-0");
                                if (targetElement)
                                    targetElement.scrollIntoView({
                                        behavior: "smooth",
                                    });
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

export default SliderComp;
