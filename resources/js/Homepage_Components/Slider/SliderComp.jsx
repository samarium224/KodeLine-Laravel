import React, { useState, useEffect } from "react";
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
    const [backgroundImage, setBackgroundImage] = useState("");

    useEffect(() => {
        const imageUrl = isMobileScreen ? mobileImgURL : imgURL;
        setBackgroundImage(imageUrl);
    }, [imgURL, isMobileScreen, mobileImgURL]);

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
        <Box width="100vw">
            <Box
                sx={{
                    mx: "auto",
                    backgroundImage: {
                        xs: `url("${backgroundImage}")`,
                        md: `url("${backgroundImage}")`,
                    },
                    backgroundPosition: backgroundPosition,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: { xs: "100%", maxAllowableWidth: "1960px" },
                    height: {
                        xl: `calc(86vh - 56px)`,
                        md: `calc(86vh - 49px)`,
                        xs: `calc(86vh - 30px + 1px)`,
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
                        mx: { md: 12.5, xl: 15 },
                        pb: { xs: 0, md: 15 },
                        pt: { xs: 20, md: 0 },
                        position: "relative",
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
                        sx={{
                            mb: 1,
                            width: "95%",
                            textShadow: "0px 0px 10px rgba(0,0,0,0.15)",
                        }}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    <Typography
                        variant="subtitle"
                        component={motion.div}
                        variants={animationVariants}
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                        transition={{ duration: 0.4, delay: 0 }}
                        color={theme.palette.text.white[500]}
                        sx={{
                            mb: { xl: 5, md: 3, xs: 10 },
                            width: { xs: "95%", md: "100%" },
                            textShadow: "0px 0px 10px rgba(0,0,0,0.15)",
                        }}
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                    />

                    <Box
                        component={motion.div}
                        variants={animationVariants}
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                        transition={{ duration: 0.4, delay: 0 }}
                    >
                        <Button
                            sx={{
                                color: theme.palette.text.white[500],
                                backgroundColor: "transparent",
                                border: `2px solid ${theme.palette.text.white[500]}`,
                                fontWeight: "500",
                                fontSize: {
                                    xl: "1.1rem",
                                    md: "0.85rem",
                                    xs: "0.8rem",
                                },
                                px: { xl: 5, md: 5, xs: 3 },
                                py: { xl: 1.5, md: 1.2, xs: 1 },
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.text.white[500],
                                    color: theme.palette.text.grey[500],
                                },
                            }}
                            onClick={() => {
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
                    <Typography
                        variant="secondaryTitle"
                        display="block"
                        position="absolute"
                        color={theme.palette.text.white[500]}
                        sx={{
                            transform: "translateX(50%)",
                            fontWeight: 700,
                            fontSize: {
                                xl: "1.5rem",
                                md: "1.25rem",
                                xs: "1rem",
                            },
                            right: "120px",
                            bottom: "30px",
                        }}
                    >
                        Love Loud, Live Liberated.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SliderComp;
