import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, useTheme } from "@mui/material";
import Testimonial from "./Testimonial";

import { TestimonialsData } from "@/Global_data/TestimonialsData";

const Testimonials = () => {
    const theme = useTheme();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
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
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box width="100%" backgroundColor="#F1EDEC">
            <Container maxWidth="xl">
                <Slider {...settings}>
                    {TestimonialsData.map((testimonial, i) => (
                        <Testimonial
                            key={i}
                            userRating={testimonial.userRating}
                            userCommentTitle={testimonial.userCommentTitle}
                            userCommentDesc={testimonial.userCommentDesc}
                        />
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default Testimonials;
