import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemCard from "@/Global_Components/ItemCard/ItemCard";
import { Box, Button, useTheme } from "@mui/material";
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
        <Box display="flex" sx={{ flexDirection: { xs: "column", md: "row" } }}>
            <Box
                sx={{
                    backgroundImage: {
                        xs: `url("https://picsum.photos/640/800")`,
                        sm: `url("https://picsum.photos/800/640")`,
                    },
                    backgroundPosition: "center bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: { xs: "100%", md: "50%" },
                    height: {
                        xs: "600px",
                        lg: "80vh",
                        maxAllowableWidth: "800px",
                    },
                    pb: 15,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                }}
            >
                <Button
                    sx={{
                        backgroundColor: theme.palette.text.white[100],
                        color: theme.palette.text.grey[500],
                        fontSize: { xs: "0.9rem", md: "1.5rem" },
                        fontWeight: 400,
                        px: { xs: 6, md: 10 },
                        py: { xs: 1.5, md: 2 },
                    }}
                >
                    SHOP NOW
                </Button>
            </Box>
            <Box
                backgroundColor={theme.palette.primary.main}
                sx={{
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: { xs: "transparent", md: "white" },
                        py: { xs: 3, md: 6 },
                        maxWidth: { xs: "225px", md: "350px" },
                        scale: { xs: "0.7", md: "0.8", lg: "1" },
                    }}
                >
                    <Slider {...settings}>
                        {items.map((item, i) => (
                            <ItemCard
                                key={i}
                                itemID={item.itemID}
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
