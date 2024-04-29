import { Typography, Menu, Box, useTheme, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const PriceFilter = ({ priceRange, setPriceRange, minPrice, maxPrice }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMinPriceChange = (event) => {
        const newMinPrice = parseFloat(event.target.value);
        if (
            isNaN(newMinPrice) ||
            (newMinPrice >= minPrice && newMinPrice <= maxPrice)
        ) {
            setPriceRange([
                isNaN(newMinPrice) ? minPrice : newMinPrice,
                priceRange[1],
            ]);
        }
    };

    const handleMaxPriceChange = (event) => {
        const newMaxPrice = parseFloat(event.target.value);
        if (
            isNaN(newMaxPrice) ||
            (newMaxPrice >= minPrice && newMaxPrice <= maxPrice)
        ) {
            setPriceRange([
                priceRange[0],
                isNaN(newMaxPrice) ? maxPrice : newMaxPrice,
            ]);
        }
    };

    const handleDropdownClick = (event) => setAnchorEl(event.currentTarget);
    const handleDropdownClose = () => setAnchorEl(null);

    useEffect(() => {
        window.addEventListener("scroll", handleDropdownClose);
        return () => window.removeEventListener("scroll", handleDropdownClose);
    }, []);

    return (
        <>
            <Typography
                variant="itemdescTitle"
                textTransform="initial"
                color={theme.palette.text.grey[500]}
                aria-controls="price-filter"
                aria-haspopup="true"
                onClick={handleDropdownClick}
                sx={{ cursor: "pointer" }}
            >
                Price{" "}
                {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Typography>
            <Menu
                id="price-filter"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleDropdownClose}
                sx={{
                    "& > .MuiPaper-root": {
                        boxShadow: "none",
                        transition: "none !important",
                        backgroundColor: "transparent",
                    },
                }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <TextField
                        type="number"
                        label="Min Price"
                        placeholder="From"
                        InputProps={{
                            inputProps: { min: minPrice, max: maxPrice },
                        }}
                        onChange={handleMinPriceChange}
                        sx={{
                            mr: 2,
                            width: "150px",
                            borderRadius: "0px",
                            "& .MuiInputBase-input": {
                                "&:focused": {
                                    borderColor: "transparent",
                                    boxShadow: "none !impotant",
                                },
                            },
                        }}
                    />
                    <TextField
                        type="number"
                        label="Max Price"
                        placeholder="To"
                        InputProps={{
                            inputProps: { min: minPrice, max: maxPrice },
                        }}
                        onChange={handleMaxPriceChange}
                        sx={{
                            width: "150px",
                            borderRadius: "0px",
                            "&:focused": {
                                borderColor: "transparent",
                                boxShadow: "none !impotant",
                            },
                        }}
                    />
                </Box>
            </Menu>
        </>
    );
};

export default PriceFilter;
