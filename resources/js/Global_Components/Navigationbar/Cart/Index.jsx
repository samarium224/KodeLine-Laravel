import React, { useState } from "react";
import { Box, Button, IconButton, Drawer } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { checkoutItems } from "../data";
import { CartContent } from "./CartContent";

export const NavigationCheckout = ({
    cartOpen,
    toggleCart,
    navButtonStyle,
    theme,
}) => {
    const [checkoutRequestItems, setCheckoutRequestItems] =
        useState(checkoutItems);

    const totalQuantity = checkoutRequestItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
    const subtotal = checkoutRequestItems.reduce(
        (total, item) => total + item.currentPrice * item.quantity,
        0
    );

    const handleQuantityChange = (index, newQuantity) => {
        setCheckoutRequestItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems[index].quantity = newQuantity;
            return updatedItems;
        });
    };

    const removeItem = (index) => {
        setCheckoutRequestItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems.splice(index, 1);
            return updatedItems;
        });
    };

    return (
        <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
        >
            <Button
                sx={navButtonStyle}
                aria-controls="currency-menu"
                aria-haspopup="true"
            >
                Currency: $CAD
            </Button>
            <IconButton
                sx={{ color: theme.palette.text.white[500], ml: 4 }}
                onClick={toggleCart(true)}
            >
                <ShoppingCartIcon />
            </IconButton>
            <Drawer
                anchor="right"
                open={cartOpen}
                onClose={toggleCart(false)}
                ModalProps={{ keepMounted: true }}
                sx={{
                    "& .MuiPaper-root": {
                        boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.1)",
                    },
                }}
            >
                <CartContent
                    checkoutRequestItems={checkoutRequestItems}
                    handleQuantityChange={handleQuantityChange}
                    removeItem={removeItem}
                    totalQuantity={totalQuantity}
                    subtotal={subtotal}
                    theme={theme}
                    toggleCart={toggleCart}
                />
            </Drawer>
        </Box>
    );
};
