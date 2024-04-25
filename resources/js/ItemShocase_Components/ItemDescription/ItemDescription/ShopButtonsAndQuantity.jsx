import { Button, Typography, Box, useTheme } from "@mui/material";

const ShopButtonsAndQuantity = ({ itemType }) => {
    const theme = useTheme();

    return (
        <Box className="shop-buttons" mt={5}>
            <Typography
                variant="itemdescTitle"
                display="block"
                textTransform="initial"
                color={theme.palette.text.grey[600]}
                my={1}
            >
                Free delivery & returns
            </Typography>
            <Typography
                variant="itemdescTitle"
                display="block"
                textTransform="initial"
                color={theme.palette.text.grey[500]}
                my={1}
                mb={4}
            >
                Secure online shopping
            </Typography>
            <Typography
                variant="itemdescSubtitle"
                display="block"
                color={theme.palette.text.grey[500]}
                my={1}
            >
                Only 14 Left in Stock
            </Typography>
            {itemType !== "PreordereItem" && (
                <Button
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: "uppercase",
                        width: { xs: "100%", lg: "80%" },
                        border: `1px solid ${theme.palette.primary.main}`,
                        my: 1,
                        py: 1.25,
                        "&:hover": {
                            backgroundColor: theme.palette.text.grey[700],
                            color: theme.palette.text.white[100],
                        },
                    }}
                >
                    Add to cart
                </Button>
            )}
            <Button
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.text.white[100],
                    textTransform: "uppercase",
                    my: 1,
                    width: { xs: "100%", lg: "80%" },
                    py: 1.75,
                    "&:hover": {
                        backgroundColor: theme.palette.text.grey[700],
                    },
                }}
            >
                {itemType === "PreordereItem" ? "Pre Order Now" : "Buy Now"}
            </Button>
        </Box>
    );
};

export default ShopButtonsAndQuantity;
