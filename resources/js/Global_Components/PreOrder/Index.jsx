import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemCard from "@/Global_Components/ItemCard/ItemCard";
import { Box, Button, useTheme } from "@mui/material";
import { PrevArrow, NextArrow } from "./SliderArrows";

const PreOrder = ({ items }) => {
    const theme = useTheme();
    const settings = {
        arrows: false,
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // prevArrow: <PrevArrow />,
        // nextArrow: <NextArrow />,
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
                        xs: "550px",
                        lg: "75vh",
                        maxAllowableWidth: "700px",
                    },
                    pb: 15,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                }}
            >
                <Button
                    sx={{
                        color: theme.palette.text.white[500],
                        backgroundColor: "transparent",
                        border: `2px solid ${theme.palette.text.white[500]}`,
                        fontWeight: "500",
                        fontSize: {
                            xl: "1.25rem",
                            md: "1rem",
                            xs: "0.9rem",
                        },
                        px: { xl: 9, md: 6, xs: 4 },
                        py: { xl: 1.66, md: 1.2, xs: 1 },
                        "&:hover": {
                            backgroundColor: theme.palette.text.white[500],
                            color: theme.palette.text.grey[500],
                        },
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
                        py: { xs: 2, md: 4.5 },
                        maxWidth: { xs: "205px", md: "320px" },
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
