import { Typography, Slider, Menu, Box, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const PriceFilter = ({
    onPriceRangeChange,
    priceRange,
    setPriceRange,
    minPrice,
    maxPrice,
}) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
        onPriceRangeChange(newValue);
    };

    const handleDropdownClick = (event) => setAnchorEl(event.currentTarget);

    const handleDropdownClose = () => setAnchorEl(null);

    useEffect(() => {
        window.addEventListener("scroll", handleDropdownClose);
        return () => window.removeEventListener("scroll", handleDropdownClose);
    }, []);

    const valueLabelFormat = (value) => `$${value.toFixed(2)}`;

    return (
        <>
            <Typography
                ml={10}
                variant="itemdescTitle"
                textTransform="initial"
                color={theme.palette.text.grey[500]}
                aria-controls="price-filter"
                aria-haspopup="true"
                onClick={handleDropdownClick}
                sx={{ cursor: "pointer" }}
            >
                Price
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
                    },
                }}
            >
                <Box px={5} pt={3.5} width="250px">
                    <Slider
                        value={priceRange}
                        valueLabelDisplay="on"
                        onChange={handlePriceChange}
                        valueLabelFormat={valueLabelFormat}
                        aria-labelledby="range-slider"
                        min={minPrice}
                        max={maxPrice}
                    />
                </Box>
            </Menu>
        </>
    );
};

export default PriceFilter;
