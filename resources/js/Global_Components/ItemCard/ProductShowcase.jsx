import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import CustomButton from "../CustomButton";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductShowcase = ({
    itemID,
    itemImage,
    sale,
    buttonText = "ADD TO CART",
}) => {
    const theme = useTheme();
    const [backgroundImage, setBackgroundImage] = useState("");
    const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));
    const { data, setData, post, errors } = useForm({
        itemID: itemID,
    });

    useEffect(() => {
        setBackgroundImage(itemImage || "./assets/blank.jpg");
    }, [itemImage]);

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     post(route("addtocart"));
    // };

    return (
        <Box
            component={Link}
            href={
                buttonText == "ADD TO CART"
                    ? route("itemshowcase", { id: itemID, color: 0 })
                    : route("preordershowcase", { id: itemID, color: 0 })
            }
            sx={{
                scale: buttonText == "PRE ORDER" && "0.9",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "Center",
                height: { xs: "232px", md: "320px", lg: "360px", xl: "400px" },
                width: { xs: "174px", md: "240px", lg: "270px", xl: "300px" },
                maxWidth: { sm: "22.5vw", xs: "45vw" },
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                p: { xs: "12px", md: "20px" },
                mb: 2,
                transition: "1s",
                cursor: "pointer",
                "&:hover .MuiButtonBase-root": {
                    opacity: "100",
                    mb: "0px",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end",
                }}
            >
                {sale && (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "0.55rem",
                                    md: "0.6rem",
                                    xl: "0.7rem",
                                },
                                px: { xs: 1, md: 1.5 },
                                py: { xs: 0.66, md: 1 },
                                fontWeight: "400",
                                color: theme.palette.text.grey[500],
                                backgroundColor: theme.palette.text.white[100],
                                borderRadius: "0px",
                            }}
                        >
                            SAVE {sale}%
                        </Typography>
                    </Box>
                )}
            </Box>
            <CustomButton
                text={
                    isMobileScreen ? (
                        <AddShoppingCartIcon fontSize="small" />
                    ) : (
                        buttonText
                    )
                }
                // onClick={handleClick}
                sx={{
                    opacity: { xs: "100", md: "0" },
                    transition: ".33s",
                    mb: { xs: "0", md: "-10px" },
                    // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
                }}
            />
        </Box>
    );
};

export default ProductShowcase;
