import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const CategoryMenu = ({ color }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleMenuClose);
        return () => {
            window.removeEventListener("scroll", handleMenuClose);
        };
    }, []);

    return (
        <>
            <Button
                aria-controls="category-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                sx={{ color: color }}
            >
                Categories
            </Button>
            <Menu
                id="category-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Category 1</MenuItem>
                <MenuItem onClick={handleMenuClose}>Category 2</MenuItem>
                <MenuItem onClick={handleMenuClose}>Category 3</MenuItem>
            </Menu>
        </>
    );
};

export default CategoryMenu;
