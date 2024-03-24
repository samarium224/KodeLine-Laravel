import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

import SliderComp from "./SliderComp";

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        <div style={{ width: "100vw" }}>
            <Slider {...settings}>
                <SliderComp
                    image={"url('https://picsum.photos/seed/image2/1920/1080')"}
                />
                <SliderComp
                    image={"url('https://picsum.photos/seed/image2/1920/1080')"}
                />
                <SliderComp
                    image={"url('https://picsum.photos/seed/image3/1920/1080')"}
                />
                <SliderComp
                    image={"url('https://picsum.photos/seed/image4/1920/1080')"}
                />
            </Slider>
        </div>
    );
};

export default SliderComponent;
