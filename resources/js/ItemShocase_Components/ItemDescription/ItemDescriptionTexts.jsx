import { Box, Button, Typography, useTheme } from "@mui/material";
import ItemShopQuantity from "./ItemShopQuantity";

const ItemDescriptionTexts = () => {
    const theme = useTheme();
    return (
        <Box width="40%">
            <Box>
                <Typography
                    variant="subtitle"
                    className="item-name"
                    fontWeight="500"
                    display="block"
                    textTransform="uppercase"
                    color={theme.palette.text.grey[500]}
                >
                    Summer Suit
                </Typography>
                <Typography
                    variant="subtitle"
                    className="item-price"
                    fontWeight="500"
                    display="block"
                    color={theme.palette.text.grey[500]}
                >
                    $50.00
                </Typography>
            </Box>
            <ItemShopQuantity theme={theme} />
            <Box className="sizes" mt={5}>
                {[
                    "3 Years: 100CM",
                    "4 Years: 110CM",
                    "5 Years: 120CM",
                    "6 Years: 130CM",
                ].map((size, i) => (
                    <Typography
                        key={i}
                        variant="itemdescTitle"
                        textTransform="initial"
                        color={theme.palette.text.grey[500]}
                        display="block"
                    >
                        {size}
                    </Typography>
                ))}
            </Box>
            <Box className="colors" mt={5}>
                <Typography
                    variant="itemdescTitle"
                    display="block"
                    color={theme.palette.text.grey[500]}
                    my={1}
                >
                    Colour
                </Typography>
                {["#ff0000", "#00ff00", "#0000ff"].map((color, i) => (
                    <Button
                        key={i}
                        sx={{
                            backgroundColor: color,
                            mr: 1,
                            py: 2,
                            borderRadius: "5px",
                        }}
                    />
                ))}
            </Box>
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
                <Button
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.text.white[100],
                        textTransform: "uppercase",
                        mr: 2.5,
                        px: 2.5,
                        py: 1.25,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                        },
                    }}
                >
                    Add to cart
                </Button>
                <Button
                    sx={{
                        backgroundColor: theme.palette.text.grey[700],
                        color: theme.palette.text.white[100],
                        textTransform: "uppercase",
                        mr: 2.5,
                        px: 2.5,
                        py: 1.25,
                        "&:hover": {
                            backgroundColor: theme.palette.text.grey[700],
                        },
                    }}
                >
                    Buy now
                </Button>
            </Box>
            <Box className="description-text" mt={5}>
                <Typography
                    variant="itemdescTitle"
                    display="block"
                    textTransform="initial"
                    color={theme.palette.text.grey[600]}
                    my={1}
                >
                    A limited edition product, designed exclusively for you
                </Typography>
                <Typography
                    variant="itemdescTitle"
                    display="block"
                    textTransform="initial"
                    color={theme.palette.text.grey[500]}
                    my={2}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    corporis atque quos deserunt, rerum molestiae illum odit
                    eius maxime ex debitis aut! Sit nihil atque dolor iure
                    eveniet eaque quasi?
                </Typography>
                <Typography
                    variant="itemdescTitle"
                    display="block"
                    textTransform="initial"
                    color={theme.palette.text.grey[600]}
                    my={1}
                >
                    Product details
                </Typography>
                <Typography
                    variant="itemdescTitle"
                    display="block"
                    textTransform="initial"
                    color={theme.palette.text.grey[500]}
                    my={2}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    In corporis atque quos deserunt, <br />
                    rerum molestiae illum odit eius maxime ex debitis aut!
                    <br />
                    Sit nihil <br />
                    atque dolor <br />
                    iure eveniet eaque <br />
                    quasi?
                </Typography>
            </Box>
        </Box>
    );
};

export default ItemDescriptionTexts;
