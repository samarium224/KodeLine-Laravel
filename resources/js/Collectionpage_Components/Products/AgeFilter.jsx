import { Typography, Menu, Box, useTheme, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const AgeFilter = ({ ageRange, setAgeRange, minAge, maxAge }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMinAgeChange = (event) => {
        const newMinAge = parseFloat(event.target.value);
        if (isNaN(newMinAge) || (newMinAge >= minAge && newMinAge <= maxAge)) {
            setAgeRange([isNaN(newMinAge) ? minAge : newMinAge, ageRange[1]]);
        }
    };

    const handleMaxAgeChange = (event) => {
        const newMaxAge = parseFloat(event.target.value);
        if (isNaN(newMaxAge) || (newMaxAge >= minAge && newMaxAge <= maxAge)) {
            setAgeRange([ageRange[0], isNaN(newMaxAge) ? maxAge : newMaxAge]);
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
                aria-controls="age-filter"
                aria-haspopup="true"
                onClick={handleDropdownClick}
                sx={{ cursor: "pointer", ml: 6 }}
            >
                Age{" "}
                {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Typography>
            <Menu
                id="age-filter"
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
                        label="Min Age"
                        placeholder="From"
                        InputProps={{
                            inputProps: { min: minAge, max: maxAge },
                        }}
                        onChange={handleMinAgeChange}
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
                        label="Max Age"
                        placeholder="To"
                        InputProps={{
                            inputProps: { min: minAge, max: maxAge },
                        }}
                        onChange={handleMaxAgeChange}
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

export default AgeFilter;
