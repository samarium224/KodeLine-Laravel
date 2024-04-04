import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "@inertiajs/react";
// import { Collections } from "@/Global_data/Collections";

const CategoryMenu = ({ color, Collections }) => {
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
                    <Link
                        href={route("collection", {
                            id: collection.collection_id,
                        })}
                        key={i}
                    >
                        <MenuItem onClick={handleMenuClose}>
                            {collection.collection_name}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </>
    );
};

export default CategoryMenu;
