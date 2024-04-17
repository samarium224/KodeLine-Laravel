import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import React, { useState } from "react";
import PriceFilter from "./PriceFilter";

// import { CollectionItemsList } from "./data";

const Products = ({ CollectionItemsList }) => {
    const theme = useTheme();

    const lowestPrice = Math.floor(
        Math.min(...CollectionItemsList.map((item) => item.currentPrice))
    );
    const highestPrice = Math.ceil(
        Math.max(...CollectionItemsList.map((item) => item.currentPrice))
    );

    const [priceRange, setPriceRange] = useState([lowestPrice, highestPrice]); // Default price range

    // Filter items based on price range
    const filteredItems = CollectionItemsList.filter(
        (item) =>
            item.currentPrice >= priceRange[0] &&
            item.currentPrice <= priceRange[1]
    );

    const handlePriceRangeChange = (newRange) => {
        setPriceRange(newRange);
    };

    return (
        <Container maxWidth="desktopMaxWidth" sx={{ mt: 10, mb: 20 }}>
            <Box mb={7.5}>
                <Typography
                    variant="itemdescTitle"
                    textTransform="initial"
                    color={theme.palette.text.grey[500]}
                >
                    Filter
                </Typography>
                {/* Price Filter */}
                <PriceFilter
                    onPriceRangeChange={handlePriceRangeChange}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    minPrice={lowestPrice}
                    maxPrice={highestPrice}
                />

                {/* Age Filter */}
                {/* Best Selling Filter */}
            </Box>
            <Grid container>
                {filteredItems.map((item, i) => (
                    <Grid item xs={6} md={3} key={i} mt={5}>
                        <ItemCard
                            itemID={item.itemID}
                            itemImage={item.imgURL}
                            itemTitle={item.itemTitle}
                            ageRange={item.ageRange}
                            currentPrice={item.currentPrice}
                            oldPrice={item.oldPrice}
                            animationDelay={0.2 + (i % 4) * 0.15}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;
