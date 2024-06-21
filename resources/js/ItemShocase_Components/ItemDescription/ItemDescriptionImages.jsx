import React, { useState } from "react";
import { Box, Modal, IconButton } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CloseIcon from "@mui/icons-material/Close";

import { PrevArrow, NextArrow } from "@/Global_Components/SliderArrows";

const ItemDescriptionImages = ({ itemData }) => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    const settings = {
        arrows: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        initialSlide: selectedImage,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    itemData.imgURL.secondary = itemData.imgURL.secondary.filter(
        (url) => url !== null
    );

    const handleOpen = (imageID) => {
        setSelectedImage(imageID);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(0);
    };

    const secondary_images = Math.min(itemData.imgURL.secondary.length, 3);

    return (
        <Box
            display="flex"
            sx={{
                flexDirection: { lg: "row", xs: "column-reverse" },
                width: { lg: "60%", md: "50%", sm: "75%", xs: "100%" },
                mb: { xs: 2, md: 15 },
                mx: "auto",
            }}
            justifyContent="space-between"
        >
            {secondary_images > 0 && (
                <Box
                    className="inactive-item-images"
                    display="flex"
                    sx={{
                        flexDirection: { lg: "column", xs: "row" },
                        minWidth: { md: "480px", lg: "initial" },
                    }}
                    justifyContent="center"
                >
                    {itemData.imgURL.secondary.slice(0, 4).map((image, i) => (
                        <Box
                            key={i}
                            className="active-item-image"
                            sx={{
                                backgroundImage: `url(${
                                    image ? image : "./assets/blank.jpg"
                                })`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                cursor: "pointer",
                                height: {
                                    xs: "100px",
                                    sm: "120px",
                                    lg: `calc(100% / ${secondary_images})`,
                                },
                                width: { xs: "calc(100% / 4)", lg: "180px" },
                                my: { lg: "8px", xs: 0 },
                                mx: { lg: 0, xs: "4px" },
                                mt: { lg: 0, xs: 1 },
                            }}
                            onClick={() => handleOpen(i + 1)}
                        />
                    ))}
                </Box>
            )}
            <Box
                className="active-item-image"
                maxWidth="750px"
                sx={{
                    width: "100%",
                    height: {
                        xs: "300px",
                        sm: "500px",
                        lg: `${
                            secondary_images ? secondary_images * 200 : 800
                        }px`,
                    },
                    minWidth: { md: "480px", lg: "initial" },
                    backgroundImage: `url("${
                        itemData.imgURL.primary
                            ? itemData.imgURL.primary
                            : "./assets/blank.jpg"
                    }")`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    mx: { lg: "10px" },
                }}
                onClick={() => handleOpen(0)}
            />

            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{
                    style: { backgroundColor: "rgba(255, 255, 255, 0.98)" },
                }}
            >
                <>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: "fixed",
                            right: "50px",
                            top: "50px",
                            zIndex: 5,
                            color: "#333",
                            display: open ? "block" : "none",
                        }}
                    >
                        <CloseIcon fontSize="large" />
                    </IconButton>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            maxWidth: { xs: "90vw", sm: "calc(100vw - 200px)" },
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#fff",
                            borderRadius: "5px",
                            "&:focus": { outline: "none" },
                        }}
                    >
                        <Slider {...settings}>
                            <Box
                                display="flex !important"
                                justifyContent="center"
                            >
                                <Box
                                    component="img"
                                    sx={{ height: "75vh" }}
                                    src={itemData.imgURL.primary}
                                />
                            </Box>
                            {itemData.imgURL.secondary.map((secimgURL, i) => (
                                <Box
                                    key={i}
                                    display="flex !important"
                                    justifyContent="center"
                                >
                                    <Box
                                        component="img"
                                        sx={{ height: "75vh" }}
                                        src={secimgURL}
                                    />
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </>
            </Modal>
        </Box>
    );
};

export default ItemDescriptionImages;
