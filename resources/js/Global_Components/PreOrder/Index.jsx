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
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <Box backgroundColor={theme.palette.primary.main}>
            <Box
                sx={{
                    backgroundImage: {
                        xs: `url("./assets/KidsLine_6_9.png")`,
                        sm: `url("./assets/Savings.png")`,
                    },
                    backgroundPosition: "left bottom",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: { xs: "100%", maxAllowableWidth: "1920px" },
                    height: {
                        xs: "600px",
                        lg: "110vh",
                        maxAllowableWidth: "1000px",
                    },
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
                            top: { xs: "80px", md: "55vh", xl: "550px" },
                            left: { xs: "135px", md: "50%" },
                            fontWeight: "700",
                        }}
                    >
                        Coming Soon...
                    </Typography>
                    <Box
                        position="absolute"
                        sx={{
                            backgroundColor: { xs: "transparent", md: "white" },
                            py: { xs: 3, md: 6 },
                            transform: {
                                xs: "translate(-50%, -50%)",
                                md: "initial",
                            },
                            maxWidth: { xs: "225px", xl: "350px", md: "325px" },
                            right: { md: 80, xl: -10 }, // Remove the right property for xs breakpoint
                            top: { xs: "235px", md: "50px" },
                            scale: { xs: "0.7", md: "0.8", lg: "1" },
                            left: { xs: "50%" }, // Add this to center horizontally in xs breakpoint
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
