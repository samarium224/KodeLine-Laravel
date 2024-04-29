import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    useTheme,
} from "@mui/material";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import React, { useState } from "react";
import PriceFilter from "./PriceFilter";
import AgeFilter from "./AgeFilter";

// import { CollectionItemsList } from "./data";

const Products = ({ CollectionItemsList }) => {
    const theme = useTheme();

    const minPrice = Math.min(
        ...CollectionItemsList.map((item) => item.currentPrice)
    );
    const maxPrice = Math.max(
        ...CollectionItemsList.map((item) => item.currentPrice)
    );
    const minAge = Math.min(
        ...CollectionItemsList.map((item) => item.ageRange[0])
    );
    const maxAge = Math.max(
        ...CollectionItemsList.map((item) => item.ageRange[1])
    );

    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [ageRange, setAgeRange] = useState([minAge, maxAge]);

    // Filter items based on price range
    const filteredItems = CollectionItemsList.filter(
        (item) =>
            item.currentPrice >= priceRange[0] &&
            item.currentPrice <= priceRange[1] &&
            item.ageRange[0] >= ageRange[0] &&
            item.ageRange[1] <= ageRange[1]
    );

    const clearFilter = () => {
        setPriceRange([minPrice, maxPrice]);
        setAgeRange([minAge, maxAge]);
    };

    return (
        <Container maxWidth="desktopMaxWidth" sx={{ mt: 6, mb: 7 }}>
            <Typography
                variant="secondaryTitle"
                textTransform="initial"
                color={theme.palette.secondary.main}
                fontWeight={600}
            >
                Sort By
            </Typography>
            {/* Price Filter */}
            <Box mb={2}>
                <hr />
            </Box>
            <Box mb={2} display="flex" justifyContent="space-between">
                <Box>
                    <PriceFilter
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                    />

                    <AgeFilter
                        ageRange={ageRange}
                        setAgeRange={setAgeRange}
                        minAge={minAge}
                        maxAge={maxAge}
                    />
                </Box>

                <Button sx={{ p: 0 }}>
                    <Typography
                        variant="itemdescTitle"
                        textTransform="initial"
                        color={theme.palette.text.grey[500]}
                        onClick={clearFilter}
                        sx={{ cursor: "pointer" }}
                    >
                        Clear Filter
                    </Typography>
                </Button>
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
