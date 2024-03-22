import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const CurrencyMenu = ({ currency, onCurrencyChange, color }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleCurrencyChange = (value) => {
        onCurrencyChange(value);
        handleMenuClose();
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
                aria-controls="currency-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                sx={{ color: color }}
            >
                Currency, {currency}
            </Button>
            <Menu
                id="currency-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => handleCurrencyChange("USD")}>
                    USD
                </MenuItem>
                <MenuItem onClick={() => handleCurrencyChange("EUR")}>
                    EUR
                </MenuItem>
                <MenuItem onClick={() => handleCurrencyChange("GBP")}>
                    GBP
                </MenuItem>
            </Menu>
        </>
    );
};

export default CurrencyMenu;
