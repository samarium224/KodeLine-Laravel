import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemCard from "@/Global_Components/ItemCard/ItemCard";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { PrevArrow, NextArrow } from "./SliderArrows";

const PreOrder = ({ items, content }) => {
    const theme = useTheme();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [content]);

    const settings = {
        arrows: true,
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    if (items.length > 0)
        return (
            <Box
                display="flex"
                sx={{
                    flexDirection: { xs: "column", md: "row" },
                    width: { xs: "100vw", maxAllowableWidth: "1960px" },
                    mx: "auto",
                    justifyContent: "center",
                    backgroundColor: "#dadada",
                }}
                className="preOrder"
            >
                <Box
                    sx={{
                        backgroundImage: {
                            xs: `url(${isLoaded && content.MobileImg})`,
                            sm: `url(${isLoaded && content.HomePageImg})`,
                        },
                        backgroundPosition: "center bottom",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: {
                            xs: "100%",
                            md: "55%",
                            maxAllowableWidth: "980px",
                        },
                        height: {
                            xs: "550px",
                            lg: "75vh",
                            maxAllowableWidth: "700px",
                        },
                        py: 35,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        flexDirection: "column",
                    }}
                >
                    <Box></Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        textAlign="center"
                    >
                        <Typography
                            display="block"
                            variant="headline"
                            color={theme.palette.text.white[500]}
                            sx={{
                                textShadow: "0px 0px 10px rgba(0,0,0,0.25)",
                            }}
                        >
                            {content.title}
                        </Typography>
                        <Typography
                            variant="subtitle"
                            color={theme.palette.text.white[500]}
                            sx={{
                                mb: { xl: 5, md: 3, xs: 10 },
                                width: { xs: "95%", md: "100%" },
                                textShadow: "0px 0px 10px rgba(0,0,0,0.15)",
                            }}
                        >
                            {content.subtitle}
                        </Typography>
                    </Box>
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
                                backgroundColor: theme.palette.text.white[500],
                                color: theme.palette.text.grey[500],
                            },
                        }}
                    >
                        Explore
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: "45%",
                            maxAllowableWidth: "980px",
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        maxHeight: {
                            xs: "550px",
                            lg: "75vh",
                            maxAllowableWidth: "700px",
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: "190px",
                                md: "256px",
                                lg: "286px",
                                xl: "316px",
                            },
                            backgroundColor: { xs: "white", md: "white" },
                            pt: 0.5,
                            pb: 1,
                            scale: { xs: "0.9", md: "0.8", xl: "1.05" },
                        }}
                    >
                        <Slider {...settings}>
                            {items.map((item, i) => (
                                <ItemCard
                                    key={i}
                                    itemID={item.itemID}
                                    itemImage={item.imgURL}
                                    itemTitle={item.itemTitle}
                                    ageRange={item.ageRange}
                                    currentPrice={item.currentPrice}
                                    oldPrice={item.oldPrice}
                                    buttonText="PRE ORDER"
                                />
                            ))}
                        </Slider>
                    </Box>
                </Box>
            </Box>
        );
};

export default PreOrder;
