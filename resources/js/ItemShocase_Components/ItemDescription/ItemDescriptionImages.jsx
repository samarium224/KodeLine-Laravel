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
        <Box display="flex" width="55%" justifyContent="space-between">
            <Box
                className="inactive-item-images"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
            >
                {itemData.imgURL.secondary.map((image, i) => (
                    <Box
                        key={i}
                        className="active-item-image"
                        width="180px"
                        height="calc((100% - 30px) / 4)"
                        sx={{
                            backgroundImage: `url(${
                                image ? image : "./assets/blank.jpg"
                            })`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            cursor: "pointer",
                        }}
                        onClick={() => handleOpen(image)}
                    />
                ))}
            </Box>
            <Box
                ml="10px"
                className="active-item-image"
                width="100%"
                height="100%"
                sx={{
                    backgroundImage: `url("${
                        itemData.imgURL.primary
                            ? itemData.imgURL.primary
                            : "./assets/blank.jpg"
                    }")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
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
                        <img src={selectedImage} style={{ height: "80vh" }} />
                    </Box>
                </>
            </Modal>
        </Box>
    );
};

export default ItemDescriptionImages;
