import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemCard from "@/Global_Components/ItemCard/ItemCard";
import { Box, Typography, useTheme } from "@mui/material";
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
                width: "100%",
                height: "100vh",
            }}
        >
            <Box mx={theme.containerMarginWidth} position="relative">
                <Typography
                    variant="headline"
                    sx={{
                        position: "absolute",
                        color: theme.palette.text.grey[500],
                        transform: "translate(-50%, -50%)",
                        top: "55vh",
                        left: "50%",
                        fontWeight: "700",
                    }}
                >
                    Coming Soon...
                </Typography>
                <Box
                    backgroundColor="white"
                    position="absolute"
                    width="350px"
                    right="0"
                    top="50px"
                    px={3.5}
                    py={7.5}
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
                <Box position="absolute" right="-50px" top="82.5vh">
                    <img
                        src="./assets/Logo Final.png"
                        alt="Logo"
                        style={{ height: "40px" }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default PreOrder;
