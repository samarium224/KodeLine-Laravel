import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemCard from "@/Global_Components/ItemCard/ItemCard";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { PrevArrow, NextArrow } from "./SliderArrows";

const PreOrder = ({ items }) => {
    const theme = useTheme();
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
    };

    return (
        <Box backgroundColor={theme.palette.primary.main}>
            <Box
                sx={{
                    backgroundImage: `url("./assets/Savings.png")`,
                    backgroundPosition: "left top",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: { lg: "100%", maxAllowableWidth: "1920px" },
                    height: { lg: "110vh", maxAllowableWidth: "1000px" },
                    mx: "auto",
                }}
            >
                <Container
                    maxWidth="desktopMaxWidth"
                    sx={{ position: "relative" }}
                >
                    <Typography
                        variant="headline"
                        sx={{
                            position: "absolute",
                            color: theme.palette.text.grey[500],
                            transform: "translate(-50%, -50%)",
                            top: { xs: "55vh", xl: "550px" },
                            left: "50%",
                            fontWeight: "700",
                        }}
                    >
                        Coming Soon...
                    </Typography>
                    <Box
                        backgroundColor="white"
                        position="absolute"
                        px={3.5}
                        py={6}
                        sx={{
                            maxWidth: { xl: "350px", lg: "325px" },
                            right: { lg: 80, xl: -10 },
                            top: { lg: "50px", xl: "50px" },
                            scale: { md: "0.8", lg: "1" },
                        }}
                    >
                        <Slider {...settings}>
                            {items.map((item, i) => (
                                <ItemCard
                                    key={i}
                                    itemTitle={item.itemTitle}
                                    ageRange={item.ageRange}
                                    currentPrice={item.currentPrice}
                                    oldPrice={item.oldPrice}
                                    buttonText="PRE ORDER"
                                />
                            ))}
                        </Slider>
                    </Box>
                    <Box
                        position="absolute"
                        sx={{
                            right: { lg: "50px", xl: "-50px" },
                            top: { lg: "92.5vh", xl: "800px" },
                            "& img": {
                                height: { xs: "0px", xl: "40px" },
                            },
                        }}
                    >
                        <img src="./assets/Logo Final.png" alt="Logo" />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default PreOrder;
