import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "@inertiajs/react";
import { Collections } from "@/Global_data/Categories";

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
                sx={{ color: color, fontWeight: "700" }}
            >
                Collections
            </Button>
            <Menu
                id="category-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {Collections.map((collection, i) => (
                    <Link href={route(`collection`)} key={i}>
                        <MenuItem onClick={handleMenuClose}>
                            {collection.collectionName}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </>
    );
};

export default CategoryMenu;
