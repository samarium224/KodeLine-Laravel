import { Box, Button, IconButton, Drawer } from "@mui/material";
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
                sx={navButtonStyle}
                aria-controls="currency-menu"
                aria-haspopup="true"
            >
                Currency:{" "}
                <img
                    src="./assets/Canada Flag.svg"
                    style={{ height: "16px", marginLeft: "8px" }}
                />
            </Button>
            |
            <IconButton
                sx={{
                    color: navButtonStyle.color,
                    ml: "12px",
                    "&:hover": { backgroundColor: "transparent" },
                    scale: "1.1",
                }}
                onClick={toggleCart(true)}
            >
                <PersonIcon />
            </IconButton>
            <IconButton
                sx={{
                    color: navButtonStyle.color,
                    ml: 1,
                    "&:hover": { backgroundColor: "transparent" },
                }}
                onClick={toggleCart(true)}
            >
                <img src="./assets/Bucket.svg" style={{ height: "20px" }} />
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
