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
                justifyContent: "center",
                mb: 2,
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
                        height: { xs: "750px", md: "875px", lg: "1000px" },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            py: 15,
                            height: "100%",
                        }}
                    >
                        <Box></Box>
                        <Box mb={6}>
                            <Typography
                                display="block"
                                variant="secondaryTitle"
                                color={theme.palette.text.white[500]}
                                sx={{
                                    textShadow: "0px 0px 10px rgba(0,0,0,0.25)",
                                    fontWeight: 600,
                                }}
                            >
                                {category.categoryTitle} Collection
                            </Typography>
                            <Typography
                                display="block"
                                variant="headline"
                                color={theme.palette.text.white[500]}
                                sx={{
                                    textShadow: "0px 0px 10px rgba(0,0,0,0.25)",
                                }}
                            >
                                Sun-kissed style for every little princess!
                            </Typography>
                        </Box>
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
                                        xl: "1.1rem",
                                        lg: "1rem",
                                        xs: "0.75rem",
                                    },
                                    px: { xl: 5, md: 5, xs: 4 },
                                    py: { xl: 1.5, md: 1.2, xs: 1 },
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.text.white[500],
                                        color: theme.palette.text.grey[500],
                                    },
                                }}
                            >
                                View All
                            </Button>
                        </Link>
                    </Box>
                </Box>
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
                    flexWrap="wrap"
                >
                    {category.categoryItemList.map((CategoryItem, i) => (
                        <Box
                            key={i}
                            sx={{
                                width: {
                                    xs: "48%",
                                    sm: "24%",
                                    md: "46.5%",
                                    xl: "48%",
                                },
                                mb: 4,
                            }}
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
                {/* <Link
                    href={route("collection", {
                        id: category.categoryID,
                    })}
                >
                    <Button
                        sx={{
                            backgroundColor: "transparent",
                            color: theme.palette.text.grey[500],
                            border: `2px solid ${theme.palette.text.grey[500]}`,
                            // fontWeight: "500",
                            fontSize: "0.9rem",
                            fontWeight: "400",
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
                </Link> */}
            </Box>
        </Container>
    );
};

export default ShopByCategorySection;
