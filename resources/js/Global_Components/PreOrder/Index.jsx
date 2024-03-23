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
        <Box
            sx={{
                backgroundImage: `url("./assets/Savings.png")`,
                backgroundPosition: "center top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: { lg: "100%", xl: "1920px" },
                height: { lg: "110vh", xl: "1000px" },
                mx: "auto",
            }}
        >
            <Container maxWidth="xl" sx={{ position: "relative" }}>
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
                    top="50px"
                    px={3.5}
                    py={6}
                    sx={{
                        maxWidth: { xl: "350px", lg: "325px" },
                        right: { lg: 100, xl: 0 },
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
                        top: { lg: "92.5vh", xl: "750px" },
                    }}
                >
                    <img
                        src="./assets/Logo Final.png"
                        alt="Logo"
                        style={{ height: "40px" }}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default PreOrder;
