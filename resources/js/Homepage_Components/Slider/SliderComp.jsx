import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { scrollTo } from "@/Util/scrollTo";

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
    const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
                    backgroundImage: `url("${backgroundImage}")`,
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
                    maxHeight: {
                        xl: "760px",
                        lg: "680px",
                        md: "600px",
                        sm: "450px",
                    },
                }}
            >
                <Box
                    className="blabla"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: { xs: "center", md: "flex-end" },
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
                        mx: "6.66vw",
                        pb: { xs: 0, md: 12.5, lg: 15 },
                        pt: { xs: 12.5, md: 0 },
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
                            mb: { xl: 5, md: 5, xs: 5 },
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
                            onClick={() => scrollTo("collection-id-0", 140)}
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
                                lg: "1.5rem",
                                md: "1.25rem",
                                xs: "1rem",
                            },
                            right: { sm: "120px", xs: "50%" },
                            bottom: { xs: "40px", md: "30px" },
                            textWrap: "nowrap",
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
