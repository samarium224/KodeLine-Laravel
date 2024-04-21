import { Box, Modal, IconButton } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const ItemDescriptionImages = ({ itemData }) => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage("");
    };

    return (
        <Box
            display="flex"
            sx={{
                flexDirection: { lg: "row", xs: "column-reverse" },
                width: { md: "60%", xs: "100%" },
                mb: { xs: 5, md: 15 },
            }}
            justifyContent="space-between"
        >
            {itemData.imgURL.secondary.length > 0 && (
                <Box
                    className="inactive-item-images"
                    display="flex"
                    sx={{ flexDirection: { lg: "column", xs: "row" } }}
                    justifyContent="flex-start"
                >
                    {itemData.imgURL.secondary.map((image, i) => (
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
                                    xs: "120px",
                                    lg: "calc(100% / 4)",
                                },
                                width: { xs: "calc(100% / 4)", lg: "180px" },
                                mb: { lg: 1, xs: 0 },
                                mx: { lg: 0, xs: "4px" },
                                mt: { lg: 0, xs: 1 },
                            }}
                            onClick={() => handleOpen(image)}
                        />
                    ))}
                </Box>
            )}
            <Box
                className="active-item-image"
                maxHeight="1000px"
                maxWidth="750px"
                sx={{
                    width: "100%",
                    height: { xs: "60vw", md: "100%" },
                    backgroundImage: `url("${
                        itemData.imgURL.primary
                            ? itemData.imgURL.primary
                            : "./assets/blank.jpg"
                    }")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    mx: { lg: "10px", xs: "4px" },
                }}
                onClick={() => handleOpen(itemData.imgURL.primary)}
            />

            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{
                    style: { backgroundColor: "rgba(255, 255, 255, 0.98)" }, // Adjust the opacity as needed
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
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#fff",
                            borderRadius: "5px",
                            "&:focus": { outline: "none" },
                        }}
                    >
                        <img
                            src={selectedImage}
                            // style={{ height: "80vh"}}
                        />
                    </Box>
                </>
            </Modal>
        </Box>
    );
};

export default ItemDescriptionImages;
