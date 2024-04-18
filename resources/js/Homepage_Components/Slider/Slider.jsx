import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, useTheme } from "@mui/material";

import SliderComp from "./SliderComp";

import { HomeSliderData } from "./data";

const SliderComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const theme = useTheme();

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        afterChange: (current) => setCurrentSlide(current),
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
                    gap={0.5}
                    sx={{
                        "& > li": { width: "3px" },
                        "& > .slick-active div": {
                            backgroundColor: "rgba(255, 255, 255, 0.75)",
                        },
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
                    border: `1px solid rgba(255, 255, 255, 0.75)`,
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
        <div style={{ width: "100vw" }}>
            <Slider {...settings}>
                {HomeSliderData.map((sliderData, i) => (
                    <SliderComp
                        key={i}
                        collectionID={sliderData.collectionID}
                        imgURL={sliderData.imgURL}
                        mobileImgURL={sliderData.mobileImgURL}
                        title={sliderData.title}
                        subtitle={sliderData.subtitle}
                        reverseAlign={sliderData.reverseAlign}
                        backgroundPosition={sliderData.backgroundPosition}
                        isActive={i === currentSlide}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
