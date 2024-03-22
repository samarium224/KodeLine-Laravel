let items = [
    {
        itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
        ageRange: [3, 6],
        currentPrice: 40,
        oldPrice: 50,
        bestSelling: true,
    },
    {
        itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
        ageRange: [3, 6],
        currentPrice: 22.5,
        oldPrice: 30,
        bestSelling: true,
    },
    {
        itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
        ageRange: [4, 7],
        currentPrice: 50,
        oldPrice: 65,
        bestSelling: true,
    },
    {
        itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
        ageRange: [5, 8],
        currentPrice: 32.5,
        oldPrice: 40,
        bestSelling: false,
    },
    {
        itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
        ageRange: [3, 6],
        currentPrice: 40,
        oldPrice: 50,
        bestSelling: true,
    },
    {
        itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
        ageRange: [3, 6],
        currentPrice: 22.5,
        oldPrice: 30,
        bestSelling: true,
    },
    {
        itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
        ageRange: [4, 7],
        currentPrice: 50,
        oldPrice: 65,
        bestSelling: true,
    },
    {
        itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
        ageRange: [5, 8],
        currentPrice: 32.5,
        oldPrice: 40,
        bestSelling: false,
    },
];

import { Box, Grid, Typography, useTheme } from "@mui/material";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import React, { useState } from "react";
import PriceFilter from "./PriceFilter";

const Products = () => {
    const theme = useTheme();
    const [priceRange, setPriceRange] = useState([0, 100]); // Default price range

    // Filter items based on price range
    const filteredItems = items.filter(
        (item) =>
            item.currentPrice >= priceRange[0] &&
            item.currentPrice <= priceRange[1]
    );

    const handlePriceRangeChange = (newRange) => {
        setPriceRange(newRange);
    };

    return (
        <Box mx={theme.containerMarginWidth} mt={10} mb={20}>
            <Box mb={10}>
                <Typography
                    variant="itemdescTitle"
                    textTransform="initial"
                    color={theme.palette.text.grey[500]}
                >
                    Filter
                </Typography>
                {/* Price Filter */}
                <PriceFilter onPriceRangeChange={handlePriceRangeChange} />

                {/* Age Filter */}
                {/* Best Selling Filter */}
            </Box>
            <Grid container>
                {filteredItems.map((item, i) => (
                    <Grid item xs={12} sm={6} md={3} key={i} mt={5}>
                        <ItemCard
                            itemTitle={item.itemTitle}
                            ageRange={item.ageRange}
                            currentPrice={item.currentPrice}
                            oldPrice={item.oldPrice}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Products;
