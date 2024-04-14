import sanitizeHtml from "sanitize-html";
import { Box, Button, Typography, useTheme } from "@mui/material";
// import ItemShopQuantity from "../../Global_Components/Navigationbar/ItemShopQuantity";
// import { itemData } from "./data";

const ItemDescriptionTexts = ({ itemData }) => {
    const theme = useTheme();
    const sanitizedDescription = sanitizeHtml(itemData.itemDescription.desc, {
        allowedTags: ["b", "i", "em", "strong", "a", "p", "br"],
        allowedAttributes: {
            a: ["href"],
        },
    });

    return (
        <Box width="40%">
            <Box>
                <Typography
                    variant="secondaryTitle"
                    className="item-name"
                    fontWeight="500"
                    display="block"
                    textTransform="uppercase"
                    color={theme.palette.text.grey[500]}
                    mb={2}
                >
                    {itemData.itemName}
                </Typography>
                <Typography
                    variant="subtitle"
                    className="item-price"
                    fontWeight="500"
                    display="block"
                    color={theme.palette.text.grey[500]}
                >
                    ${itemData.price.toFixed(2)}
                </Typography>
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
                {itemData.colorVariants.map((colorVariant, i) => (
                    <Box
                        key={i}
                        sx={{
                            backgroundSize: "cover",
                            border: `2px solid ${theme.palette.text.grey[500]}`,
                            mr: 1,
                        }}
                        display="inline-block"
                    >
                        <img
                            src={
                                colorVariant.imgURL
                                    ? colorVariant.imgURL
                                    : "./assets/blank.jpg"
                            }
                            height="40"
                            width="40"
                            style={{ margin: "2px" }}
                        />
                    </Box>
                ))}
            </Box>
            {/* <ItemShopQuantity theme={theme} /> */}
            <Box className="sizes" mt={5}>
                <Typography
                    variant="itemdescTitle"
                    display="block"
                    color={theme.palette.text.grey[500]}
                    mb={3}
                >
                    Size <span style={{ fontWeight: "200" }}>|</span>{" "}
                    <Typography
                        variant="itemdescSubtitle"
                        color={theme.palette.text.grey[500]}
                        textTransform="initial"
                        fontWeight="300"
                    >
                        Age
                    </Typography>
                </Typography>
                {itemData.sizes.map((size, i) => (
                    <Typography
                        key={i}
                        variant="itemdescTitle"
                        textTransform="initial"
                        color={theme.palette.text.white[100]}
                        backgroundColor={theme.palette.text.grey[700]}
                        py={1.5}
                        px={3}
                        mr={1}
                        sx={{
                            "&:hover": {
                                backgroundColor: theme.palette.text.grey[800],
                                cursor: "pointer",
                            },
                        }}
                    >
                        {size}
                    </Typography>
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
                        color: theme.palette.primary.main,
                        textTransform: "uppercase",
                        width: "80%",
                        border: `1px solid ${theme.palette.primary.main}`,
                        my: 1,
                        py: 1.25,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.text.white[100],
                        },
                    }}
                >
                    Add to cart
                </Button>
                <Button
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.text.white[100],
                        textTransform: "uppercase",
                        my: 1,
                        width: "80%",
                        py: 1.75,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.main,
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
                    {itemData.itemDescription.title}
                </Typography>
                <Typography
                    variant="itemdescTitle"
                    display="block"
                    textTransform="initial"
                    color={theme.palette.text.grey[500]}
                    my={2}
                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                />
            </Box>
        </Box>
    );
};

export default ItemDescriptionTexts;
