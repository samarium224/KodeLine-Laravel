import React, { useState } from "react";
import Slider from "react-slick";
import { Box, useTheme } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SignatureItemsSlider = ({ children }) => {
    const theme = useTheme();
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleBeforeChange = (newIndex) => {
        setCurrentSlide(newIndex);
    };

    const isFirstSlide = currentSlide === 0;
    const isLastSlide = currentSlide === React.Children.count(children) - 4;

    const PrevArrow = ({ onClick }) => (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "-50px",
                transform: "translateY(-200%)",
                cursor: isFirstSlide ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                color: isFirstSlide
                    ? theme.palette.text.grey[300]
                    : theme.palette.text.grey[500],
                backgroundColor: theme.palette.text.grey[100],
                borderRadius: "50%",
                opacity: isFirstSlide ? 0.5 : 1,
            }}
            onClick={onClick}
        >
            <KeyboardArrowLeftIcon fontSize="large" />
        </Box>
    );

    const NextArrow = ({ onClick }) => (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                right: "-50px",
                transform: "translateY(-200%)",
                cursor: isLastSlide ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                color: isLastSlide
                    ? theme.palette.text.grey[300]
                    : theme.palette.text.grey[500],
                backgroundColor: theme.palette.text.grey[100],
                borderRadius: "50%",
                opacity: isLastSlide ? 0.5 : 1,
            }}
            onClick={onClick}
        >
            <KeyboardArrowRightIcon fontSize="large" />
        </Box>
    );

    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        beforeChange: handleBeforeChange,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return <Slider {...settings}>{children}</Slider>;
};

export default SignatureItemsSlider;
