import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography, Container, useTheme } from "@mui/material";

const SliderContent = ({ theme, image }) => {
    const [backgroundImage, setBackgroundImage] = useState("");
    useEffect(() => {
        setBackgroundImage(image || "./assets/blank.jpg");
    }, [image]);
    return (
        <Box
            sx={{
                backgroundImage: {
                    xs: `url("${backgroundImage}")`,
                    sm: `url("${backgroundImage}")`,
                },
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: { xs: "100%", maxAllowableWidth: "1960px" },
                height: {
                    xs: "600px",
                    lg: "80vh",
                    maxAllowableWidth: "800px",
                },
                mx: "auto",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    py: 4,
                }}
            >
                <Box sx={{ ml: 10 }}>
                    <Box
                        component="img"
                        src="./assets/Logo.svg"
                        alt="Logo"
                        sx={{ height: { md: "36px", lg: "45px", xl: "60px" } }}
                    />
                </Box>
                <Box display="flex" justifyContent="center" mt={30}>
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
                            px: { xl: 8, md: 5, xs: 3 },
                            py: { xl: 1.5, md: 1.2, xs: 1 },
                            mt: 5,
                            "&:hover": {
                                backgroundColor: theme.palette.text.white[500],
                                color: theme.palette.text.grey[500],
                            },
                        }}
                    >
                        SHOP NOW
                    </Button>
                </Box>
                <Box display="flex" justifyContent="end" sx={{ mr: 10 }}>
                    <Typography
                        variant="secondaryTitle"
                        display="block"
                        color={theme.palette.text.white[500]}
                        sx={{
                            fontWeight: 700,
                            fontSize: {
                                xl: "1.5rem",
                                md: "1.25rem",
                                xs: "1rem",
                            },
                        }}
                    >
                        Love Loud, Live Liberated.
                    </Typography>{" "}
                </Box>
            </Container>
        </Box>
    );
};

const FooterTop = () => {
    const theme = useTheme();
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        pauseOnHover: false,
        appendDots: (dots) => (
            <Box
                sx={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    display="flex"
                    gap={0.25}
                    sx={{
                        "& > li": { width: "3px" },
                        "& > .slick-active div": { backgroundColor: "white" },
                    }}
                >
                    {dots}
                </Box>
            </Box>
        ),
        customPaging: (i) => (
            <Box
                sx={{
                    width: 8,
                    height: 8,
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "50%",
                    cursor: "pointer",
                    transition: "0.3s ease",
                }}
            >
                <div />
            </Box>
        ),
    };

    return (
        <Box>
            <Slider {...settings}>
                <SliderContent
                    theme={theme}
                    image="./assets/Best Value_1960_800.png"
                />
                <SliderContent
                    theme={theme}
                    image="./assets/Fast Delivery_1960_800.png"
                />
                <SliderContent
                    theme={theme}
                    image="./assets/Curated Design.png"
                />
            </Slider>
        </Box>
    );
};

export default FooterTop;
