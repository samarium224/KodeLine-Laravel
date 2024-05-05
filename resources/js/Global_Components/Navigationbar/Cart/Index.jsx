import { Box, Button, IconButton, Drawer, Typography } from "@mui/material";
import { Link } from "@inertiajs/react";

import PersonIcon from "@mui/icons-material/Person";

import { checkoutItems } from "../data";
import { CartContent } from "./CartContent";

export const NavigationCheckout = ({
    cartOpen,
    toggleCart,
    navButtonStyle,
    theme,
    cartData,
    setcartData,
    bucketImgUrl,
}) => {
    const totalQuantity = cartData.reduce(
        (total, item) => total + item.quantity,
        0
    );
    const subtotal = cartData.reduce(
        (total, item) => total + item.currentPrice * item.quantity,
        0
    );

    const handleQuantityChange = (index, newQuantity) => {
        setcartData((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems[index].quantity = newQuantity;
            return updatedItems;
        });
    };

    const removeItem = async (index) => {
        await axios.get(`/RemoveCartItem?itemId=${cartData[index].itemID}`);
        setcartData((prevItems) => {
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
                sx={{ mx: 0, ...navButtonStyle }}
                aria-controls="currency-menu"
                aria-haspopup="true"
            >
                <Typography
                    sx={{
                        fontSize: navButtonStyle.fontSize,
                        display: { xs: "none", md: "inline" },
                    }}
                >
                    Currency:{" "}
                </Typography>
                <Box
                    component="img"
                    src="../assets/Canada Flag.svg"
                    sx={{
                        height: { xs: "12px", md: "12px", lg: "16px" },
                        ml: { xs: "16px", md: "8px" },
                    }}
                />
            </Button>
            <Typography color={navButtonStyle.color}>|</Typography>
            <IconButton
                component={Link}
                href={route("dashboard")}
                sx={{
                    color: navButtonStyle.color,
                    ml: { xs: "0px", lg: "12px" },
                    "&:hover": { backgroundColor: "transparent" },
                    scale: { xs: "0.825", lg: "1.1" },
                }}
            >
                <PersonIcon />
            </IconButton>
            <IconButton
                sx={{
                    color: navButtonStyle.color,
                    ml: { xs: 0, lg: 1 },
                    "&:hover": { backgroundColor: "transparent" },
                }}
                onClick={toggleCart(true)}
            >
                <Box
                    component="img"
                    src={bucketImgUrl}
                    sx={{ height: { xs: "15px", lg: "20px" } }}
                />
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
                    checkoutRequestItems={cartData}
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
