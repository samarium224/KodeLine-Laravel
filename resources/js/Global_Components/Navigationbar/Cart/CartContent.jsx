import { Box, Button, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "@inertiajs/react";

export const CartContent = ({
    checkoutRequestItems,
    handleQuantityChange,
    removeItem,
    updateCart,
    totalQuantity,
    subtotal,
    theme,
    toggleCart,
}) => (
    <Box
        sx={{
            role: "presentation",
            width: { xs: "100vw", md: "550px" },
            height: "100vh",
            overflowY: "auto",
            padding: 2,
            position: "relative",
        }}
    >
        <CartHeader
            toggleCart={toggleCart}
            totalQuantity={totalQuantity}
            theme={theme}
        />
        <Box display="flex" flexDirection="column" mt={6} px={2}>
            {checkoutRequestItems.map((requestItem, i) => (
                <CartItem
                    key={i}
                    index={i}
                    requestItem={requestItem}
                    handleQuantityChange={handleQuantityChange}
                    removeItem={removeItem}
                    updateCart={updateCart}
                    theme={theme}
                />
            ))}
        </Box>
        <CartFooter subtotal={subtotal} theme={theme} />
    </Box>
);

const CartHeader = ({ toggleCart, totalQuantity, theme }) => (
    <Box
        pt={3}
        pb={2}
        pl={1}
        display="flex"
        justifyContent="space-between"
        width="100%"
    >
        <div onClick={toggleCart(false)} style={{ cursor: "pointer" }}>
            <ClearIcon />
        </div>
        <div>
            <Typography
                variant="itemdescTitle"
                width={"100%"}
                letterSpacing="2px"
            >
                My Cart
                <span style={{ color: theme.palette.text.grey[400] }}>
                    {" "}
                    ({totalQuantity})
                </span>
            </Typography>
        </div>
        <div />
    </Box>
);

const CartItem = ({
    requestItem,
    index,
    handleQuantityChange,
    removeItem,
    updateCart,
    theme,
}) => (
    <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
    >
        <img src={requestItem.itemImgURL} height="80" width="60" />
        <Box flex={1} ml={2.5}>
            <Typography display="block" variant="itemdescTitle">
                {requestItem.itemTitle}
            </Typography>
            <Typography variant="itemdescSubtitle">
                ${requestItem.currentPrice.toFixed(2)}
            </Typography>
        </Box>
        <QuantityControls
            quantity={requestItem.quantity}
            onDecrease={() => {
                handleQuantityChange(
                    index,
                    Math.max(requestItem.quantity - 1, 1)
                );
                updateCart();
            }}
            onIncrease={() => {
                handleQuantityChange(
                    index,
                    Math.min(requestItem.quantity + 1, 5)
                );
                updateCart();
            }}
            maxQuantity={5}
            index={index}
            itemID={requestItem.itemID}
            removeItem={removeItem}
            updateCart={updateCart}
            theme={theme}
        />
    </Box>
);

const QuantityControls = ({
    quantity,
    onDecrease,
    onIncrease,
    maxQuantity,
    index,
    itemID,
    removeItem,
    theme,
}) => {
    return (
        <Box display="flex" justifyContent="center" flexDirection="column">
            <Box display="flex" alignItems="center" textAlign="center">
                <Link
                    href={route("updateDecQty", {
                        itemId: itemID,
                    })}
                    key={index}
                >
                    <Button
                        px={0.5}
                        py={0}
                        sx={{ minWidth: "0px", color: theme.palette.text.grey[500] }}
                        onClick={onDecrease}
                        disabled={quantity <= 1}
                    >
                        -
                    </Button>
                </Link>
                <Typography
                    display="inline"
                    color={theme.palette.text.white[500]}
                    backgroundColor={theme.palette.primary.main}
                    mx={0.75}
                    width="40px"
                    py={0.5}
                >
                    {quantity}
                </Typography>
                <Link
                    href={route("updateIncQty", {
                        itemId: itemID,
                    })}
                    key={index}
                >
                    <Button
                        px={0.5}
                        py={0}
                        sx={{ minWidth: "0px", color: theme.palette.text.grey[500] }}
                        disabled={quantity >= maxQuantity}
                    >
                        +
                    </Button>
                </Link>
            </Box>
            <Link
                href={route("removeitem", {
                    itemId: itemID,
                })}
                key={index}
            >
                <Button
                    sx={{
                        color: theme.palette.text.grey[500],
                        py: 0.25,
                        mt: 0.75,
                        textTransform: "initial",
                    }}
                    onClick={() => removeItem(index)}
                >
                    Remove
                </Button>
            </Link>
        </Box>
    )
}

const CartFooter = ({ subtotal, theme }) => (
    <Box
        position="fixed"
        top="100vh"
        sx={{
            transform: "translate(-100%, -100%)",
            width: { xs: "100vw", md: "550px" },
        }}
        left="100vw"
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
                href={route("checkout")}
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.text.white[100],
                    textTransform: "uppercase",
                    width: "60%",
                    py: 1.75,
                    "&:hover": { backgroundColor: theme.palette.primary.main },
                }}
            >
                Checkout
            </Button>
        </Box>
    </Box>
);
