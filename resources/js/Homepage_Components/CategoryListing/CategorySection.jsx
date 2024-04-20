import React, { useState, useEffect } from "react";
import ItemCard from "@/Global_Components/ItemCard/ItemCard";
import { Link } from "@inertiajs/react";
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    useTheme,
} from "@mui/material";

const ShopByCategorySection = ({ id, category, reverse = false }) => {
    const theme = useTheme();
    const [backgroundImage, setBackgroundImage] = useState("");

    useEffect(() => {
        setBackgroundImage(category.categoryImage || "./assets/blank.jpg");
    }, [category]);

    return (
        <Container
            maxWidth="desktopMaxWidth"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: { md: 20, xs: 10 },
                flexDirection: {
                    md: reverse ? "row-reverse" : "row",
                    xs: "column",
                },
                px: "0px !important",
            }}
            id={`collection-id-${id}`}
        >
            <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ width: { md: "48.75%", xs: "100%" } }}
            >
                <Box
                    width="100%"
                    mb={2.5}
                    sx={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: { xs: "750px", md: "1000px" },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            py: 15,
                            height: "100%",
                        }}
                    >
                        <Link
                            href={route("collection", {
                                id: category.categoryID,
                            })}
                        >
                            <Button
                                sx={{
                                    color: theme.palette.text.white[500],
                                    backgroundColor: "transparent",
                                    border: `2px solid ${theme.palette.text.white[500]}`,
                                    fontWeight: "500",
                                    fontSize: {
                                        xl: "1rem",
                                        md: "0.85rem",
                                        xs: "0.8rem",
                                    },
                                    px: { xl: 8, md: 5, xs: 3 },
                                    py: { xl: 1.66, md: 1.2, xs: 1 },
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.text.white[500],
                                        color: theme.palette.text.grey[500],
                                    },
                                }}
                            >
                                Explore
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Typography
                    variant="secondaryTitle"
                    color={theme.palette.text.grey[500]}
                    textTransform="uppercase"
                    display="block"
                    sx={{ mb: { md: 1, xs: 8 } }}
                >
                    {category.categoryTitle} Collection
                </Typography>
            </Box>
            <Box
                height="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ width: { md: "48.75%", xs: "100%" } }}
            >
                <Box
                    height="50%"
                    width="100%"
                    display="flex"
                    justifyContent="center"
                >
                    {category.categoryItemList
                        .slice(0, 2)
                        .map((CategoryItem, i) => (
                            <Box key={i} width="48%">
                                <ItemCard
                                    itemID={CategoryItem.itemID}
                                    itemImage={CategoryItem.imgURL}
                                    itemTitle={CategoryItem.itemTitle}
                                    ageRange={CategoryItem.ageRange}
                                    currentPrice={CategoryItem.currentPrice}
                                    oldPrice={CategoryItem.oldPrice}
                                    animationDelay={0.2 + (i % 2) * 0.15}
                                />
                            </Box>
                        ))}
                </Box>
                <Box
                    height="50%"
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    mt={5}
                >
                    {category.categoryItemList
                        .slice(2)
                        .map((CategoryItem, i) => (
                            <Box
                                key={i}
                                width={
                                    category.categoryItemList.length === 3
                                        ? "100%"
                                        : "48%"
                                }
                                display="flex"
                                justifyContent={
                                    category.categoryItemList.length === 3
                                        ? "center"
                                        : "flex-start"
                                }
                            >
                                <ItemCard
                                    itemID={CategoryItem.itemID}
                                    itemImage={CategoryItem.imgURL}
                                    itemTitle={CategoryItem.itemTitle}
                                    ageRange={CategoryItem.ageRange}
                                    currentPrice={CategoryItem.currentPrice}
                                    oldPrice={CategoryItem.oldPrice}
                                    animationDelay={0.2 + (i % 2) * 0.15}
                                />
                            </Box>
                        ))}
                </Box>
                <Link
                    href={route("collection", {
                        id: category.categoryID,
                    })}
                >
                    <Button
                        sx={{
                            backgroundColor: "transparent",
                            color: theme.palette.text.grey[500],
                            border: `2px solid ${theme.palette.text.grey[500]}`,
                            fontWeight: "500",
                            fontSize: "0.9rem",
                            fontWeight: 400,
                            px: 4,
                            py: 1,
                            mt: 3.5,
                            display: { xs: "block", md: "none" },
                            "&:hover": {
                                backgroundColor: theme.palette.text.grey[500],
                                color: theme.palette.text.white[500],
                            },
                        }}
                    >
                        EXPLORE MORE
                    </Button>
                </Link>
            </Box>
        </Container>
    );
};

export default ShopByCategorySection;
