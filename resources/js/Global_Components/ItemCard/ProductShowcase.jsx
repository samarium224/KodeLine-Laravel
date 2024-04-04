import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

import CustomButton from "../CustomButton";
import { Link } from "@inertiajs/react";

const ProductShowcase = ({
    itemID,
    itemImage,
    sale,
    buttonText = "ADD TO CART",
}) => {
    const theme = useTheme();

    return (
        <Box
            component={Link}
            href={route('itemshowcase', { id: itemID })}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "Center",
                height: { xs: "232px", md: "270px", lg: "360px", xl: "400px" },
                width: { xs: "174px", md: "242px", lg: "270px", xl: "300px" },
                backgroundImage: `url(${itemImage || "./assets/blank.jpg"})`,
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
                "&:hover": {
                    // backgroundSize: "110%",
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
                            sx={{
                                fontSize: { xs: "0.55rem", md: "0.75rem" },
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
                text={buttonText}
                sx={{
                    ...(buttonText !== "ADD TO CART"
                        ? {
                              backgroundColor: theme.palette.primary.main,
                              fontWeight: "500",
                          }
                        : {}),
                    opacity: { xs: "100", md: "0" },
                    transition: ".4s",
                    mb: { xs: "0", md: "-20px" },
                }}
            />
        </Box>
    );
};

export default ProductShowcase;
