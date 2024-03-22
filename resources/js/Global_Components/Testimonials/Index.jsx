import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, useTheme } from "@mui/material";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    const theme = useTheme();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
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
                            backgroundColor: theme.palette.text.grey[800],
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
                    width: 9,
                    height: 9,
                    border: `1px solid ${theme.palette.text.grey[800]}`,
                    borderRadius: "50%",
                    cursor: "pointer",
                    transition: "0.3s ease",
                }}
            ></Box>
        ),
    };

    return (
        <Box width="100%" backgroundColor="#F1EDEC">
            <Box>
                <Slider {...settings}>
                    <Testimonial
                        userRating={2.5}
                        userCommentTitle="Amazing Dungas! Perfect fit and amazing service."
                        userCommentDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Soluta quos at in omnis possimus adipisci tempora, facere
                    labore molestias fuga."
                    />
                    <Testimonial
                        userRating={4.5}
                        userCommentTitle="Amazing Dungas! Perfect fit"
                        userCommentDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Soluta quos at in omnis possimus adipisci tempora, facere
                    labore molestias fuga."
                    />
                    <Testimonial
                        userRating={3.5}
                        userCommentTitle="Amazing Dungas! Perfect fit and amazing service."
                        userCommentDesc="Perfect! I am so happy with them, super high quality but still lightweight. I’m so impressed with the eco-friendly packaging that they came in and how speedy the delivery was."
                    />
                    <Testimonial
                        userRating={3}
                        userCommentTitle="Amazing Dungas! Perfect fit and amazing service."
                        userCommentDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Soluta quos at in omnis possimus adipisci tempora, facere
                    labore molestias fuga."
                    />
                    <Testimonial
                        userRating={5}
                        userCommentTitle="Amazing Dungas! Perfect fit and amazing service."
                        userCommentDesc="Perfect! I am so happy with them, super high quality but still lightweight. I’m so impressed with the eco-friendly packaging that they came in and how speedy the delivery was."
                    />
                </Slider>
            </Box>
        </Box>
    );
};

export default Testimonials;
