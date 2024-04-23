import { useState } from "react";
import sanitizeHtml from "sanitize-html";
import { Box, Button, Typography, useTheme } from "@mui/material";

// import ItemShopQuantity from "../../Global_Components/Navigationbar/ItemShopQuantity";
// import { itemData } from "./data";

const ItemDescriptionTexts = ({ itemData }) => {
    const theme = useTheme();
    const sanitizedDescription = sanitizeHtml(itemData.itemDescription.desc, {
        allowedTags: [
            "b",
            "i",
            "em",
            "strong",
            "a",
            "p",
            "br",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "span",
            "div",
            "u",
            "ul",
            "li",
            "ol",
        ],
        allowedAttributes: {
            a: ["href"],
        },
    });

    const [selectedIndex, setSelectedIndex] = useState({ color: 0, size: 0 });

    const onChangeSize = (sizeIndex) => {
        setSelectedIndex({ ...selectedIndex, size: sizeIndex });
    };
    const onChangeColor = (colorIndex) => {
        setSelectedIndex({ ...selectedIndex, color: colorIndex });
    };

    return (
        <Box sx={{ width: { xs: "100%", md: "35%" } }} mb={15}>
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
                            border: `2px solid ${
                                selectedIndex.color === i
                                    ? theme.palette.text.grey[800]
                                    : theme.palette.text.grey[400]
                            }`,
                            mr: 1,
                            transition: "0.2s all ease",
                        }}
                        display="inline-block"
                        onClick={() => onChangeColor(i)}
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
                    <Button
                        key={i}
                        sx={{
                            textTransform: "initial",
                            color:
                                selectedIndex.size === i
                                    ? theme.palette.text.white[100]
                                    : theme.palette.text.grey[500],
                            backgroundColor:
                                selectedIndex.size === i
                                    ? theme.palette.text.grey[500]
                                    : "transparent",

                            border:
                                selectedIndex.size !== i &&
                                `1px solid ${theme.palette.primary.main}`,
                            py: 1.5,
                            mr: 1,
                            mb: 1,
                            width: "100px",
                            textAlign: "center",
                            "&:hover": {
                                backgroundColor: theme.palette.text.grey[800],
                                cursor: "pointer",
                            },
                        }}
                        onClick={() => onChangeSize(i)}
                    >
                        {size}
                    </Button>
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
                {itemData.itemType != "PreordereItem" && (
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
                    {itemData.itemType == "PreordereItem"
                        ? "Pre Order Now"
                        : "Buy Now"}
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
