import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "@inertiajs/react";
// import { Collections } from "@/Global_data/Collections";

const CategoryMenu = ({ sx, collections, setCollectionOpen }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setCollectionOpen(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCollectionOpen(false);
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
                sx={sx}
            >
                Collections
            </Button>
            <Menu
                id="category-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                    width: "100vw",
                    height: "300px",
                    backgroundColor: "white",
                    zIndex: 0,
                    top: { xl: "56px", md: "49px", xs: "30px" },
                    "& .MuiPaper-elevation": {
                        borderRadius: "0px",
                        boxShadow: "none",
                        py: 0.75,
                    },
                    "& .MuiBackdrop-root": {
                        backgroundColor: "transparent",
                        backdropFilter: "none",
                    },
                }}
            >
                {collections.map((collection, i) => (
                    <Link
                        href={route("collection", {
                            id: collection.collection_id,
                        })}
                        key={i}
                    >
                        <MenuItem
                            onClick={handleMenuClose}
                            sx={{
                                fontSize: "0.85rem",
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 500,
                                "&:hover ": {
                                    backgroundColor: "white",
                                    fontWeight: 600,
                                },
                            }}
                        >
                            {collection.collection_name}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </>
    );
};

export default CategoryMenu;
