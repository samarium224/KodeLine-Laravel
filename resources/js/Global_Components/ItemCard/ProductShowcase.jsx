import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

import CustomButton from "../CustomButton";

const ProductShowcase = ({ sale, buttonText = "ADD TO CART" }) => {
    const theme = useTheme();
    const randomImageUrl = `https://picsum.photos/400/800?random=${Math.random()}`;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "Center",
                height: { lg: "360px", xl: "400px" },
                width: { lg: "270px", xl: "300px" },
                backgroundImage: `url(${randomImageUrl})`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                position: "relative",
                p: "20px",
                mb: 2,
                transition: "1s",
                cursor: "pointer",
                "&:hover .MuiButtonBase-root": {
                    opacity: "100",
                    mb: "0px",
                },
                "&:hover": {
                    backgroundSize: "110%",
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
                {buttonText == "ADD TO CART" && sale && (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            px={1.5}
                            py={1}
                            sx={{
                                fontSize: "0.75rem",
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
                text={buttonText}
                sx={
                    buttonText != "ADD TO CART"
                        ? {
                              backgroundColor: theme.palette.primary.main,
                              fontWeight: "500",
                              opacity: "0",
                              transition: ".4s",
                              mb: "-20px",
                          }
                        : {
                              opacity: "0",
                              transition: ".4s",
                              mb: "-20px",
                          }
                }
            />
        </Box>
    );
};

export default ProductShowcase;
