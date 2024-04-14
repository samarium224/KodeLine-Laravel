import { useState } from "react";
import { Box, Button, IconButton, Drawer, Typography } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ClearIcon from "@mui/icons-material/Clear";

import { checkoutItems } from "./data";

export const NavigationCheckout = ({
    cartOpen,
    toggleCart,
    navButtonStyle,
    theme,
}) => {
    //=============== POST REQUEST STATE ===============
    const [checkoutRequestItems, setCheckoutRequestItems] =
        useState(checkoutItems);
    //=============== POST REQUEST STATE ===============

    let totalQuantity = 0;
    let subtotal = 0;

    checkoutRequestItems.forEach((rerquestItem) => {
        totalQuantity += rerquestItem.quantity;
        subtotal += rerquestItem.currentPrice * rerquestItem.quantity;
    });

    const handleQuantityChange = (index, newQuantity) => {
        const updatedCheckoutRequestItems = [...checkoutRequestItems];
        updatedCheckoutRequestItems[index].quantity = newQuantity;
        setCheckoutRequestItems(updatedCheckoutRequestItems);
    };

    const removeItem = (index) => {
        const updatedCheckoutRequestItems = [...checkoutRequestItems];
        updatedCheckoutRequestItems.splice(index, 1);
        setCheckoutRequestItems(updatedCheckoutRequestItems);
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
                sx={{ color: theme.palette.text.grey[500] }}
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
                <Box
                    sx={{
                        role: "presentation",
                        width: "550px",
                        height: "100vh",
                        overflowY: "auto",
                        padding: 2,
                        position: "relative",
                    }}
                >
                    <Box
                        pt={3}
                        pb={2}
                        pl={1}
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                    >
                        <div
                            onClick={toggleCart(false)}
                            style={{ cursor: "pointer" }}
                        >
                            <ClearIcon />
                        </div>
                        <div>
                            <Typography
                                variant="itemdescTitle"
                                width={"100%"}
                                letterSpacing="2px"
                            >
                                My Cart
                                <span
                                    style={{
                                        color: theme.palette.text.grey[400],
                                    }}
                                >
                                    ({totalQuantity})
                                </span>
                            </Typography>
                        </div>
                        <div></div>
                    </Box>
                    <Box display="flex" flexDirection="column" mt={6} px={2}>
                        {checkoutRequestItems.map((requestItem, i) => (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                key={i}
                            >
                                <img
                                    src={requestItem.itemImgURL}
                                    height="80"
                                    width="60"
                                />
                                <Box flex={1} ml={2.5}>
                                    <Typography
                                        display="block"
                                        variant="itemdescTitle"
                                    >
                                        {requestItem.itemTitle}
                                    </Typography>
                                    <Typography variant="itemdescSubtitle">
                                        ${requestItem.currentPrice.toFixed(2)}
                                    </Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    flexDirection="column"
                                >
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        textAlign="center"
                                    >
                                        <Button
                                            px={0.5}
                                            py={0}
                                            sx={{
                                                minWidth: "0px",
                                                color: theme.palette.text
                                                    .grey[500],
                                            }}
                                            onClick={() =>
                                                handleQuantityChange(
                                                    i,
                                                    Math.max(
                                                        requestItem.quantity -
                                                            1,
                                                        1
                                                    )
                                                )
                                            }
                                        >
                                            -
                                        </Button>
                                        <Typography
                                            display="inline"
                                            color={theme.palette.text.grey[500]}
                                            backgroundColor={
                                                theme.palette.primary.main
                                            }
                                            mx={0.75}
                                            width="40px"
                                            py={0.5}
                                        >
                                            {requestItem.quantity}
                                        </Typography>
                                        <Button
                                            px={0.5}
                                            py={0}
                                            sx={{
                                                minWidth: "0px",
                                                color: theme.palette.text
                                                    .grey[500],
                                            }}
                                            onClick={() =>
                                                handleQuantityChange(
                                                    i,
                                                    Math.min(
                                                        requestItem.quantity +
                                                            1,
                                                        9
                                                    )
                                                )
                                            }
                                        >
                                            +
                                        </Button>
                                    </Box>
                                    <Button
                                        sx={{
                                            color: theme.palette.text.grey[500],
                                            py: 0.25,
                                            mt: 0.75,
                                            textTransform: "initial",
                                        }}
                                        onClick={() => removeItem(i)}
                                    >
                                        Remove
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box
                        position="fixed"
                        top="100vh"
                        sx={{ transform: "translate(-100%, -100%)" }}
                        left="100vw"
                        width="550px"
                        backgroundColor="white"
                    >
                        <hr />
                        <Box
                            my={2.5}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            px={4}
                        >
                            <Typography
                                display="block"
                                variant="itemdescTitle"
                                textTransform="initial"
                            >
                                <span
                                    style={{
                                        color: theme.palette.text.grey[400],
                                        fontWeight: "400",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    SubTotal:
                                </span>{" "}
                                ${subtotal.toFixed(2)}
                            </Typography>
                            <Button
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.text.white[100],
                                    textTransform: "uppercase",
                                    width: "60%",
                                    py: 1.75,
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.primary.main,
                                    },
                                }}
                            >
                                Checkout
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
};
