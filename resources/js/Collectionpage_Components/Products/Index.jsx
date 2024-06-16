import React, { useState } from "react";

import {
    Box,
    Container,
    Drawer,
    Divider,
    Grid,
    Typography,
    useTheme,
    Slider,
} from "@mui/material";

import ItemCard from "../../Global_Components/ItemCard/ItemCard";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import { FilterHeader } from "./Filters/FilterHeader";
import { SubcategoriesFilter } from "./Filters/SubcategoriesFilter";
import { FilterTextFields } from "./Filters/FilterTextFields";

// import { CollectionItemsList } from "./data";

const Products = ({
    CollectionItemsList,
    selectedCategories,
    selectedCategoryID,
}) => {
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

    const [collectionOpen, setCollectionOpen] = useState(false);
    const [filter, setFilter] = useState({
        priceRange: [minPrice, maxPrice],
        ageRange: [minAge, maxAge],
        subcategories: selectedCategories.map((category) => ({
            name: category.selectedSubCat,
            id: category.selectedSubCatID,
            active: selectedCategoryID == category.selectedSubCatID,
        })),
    });

    const hasActiveSubcategory = filter.subcategories.some(
        (subcategory) => subcategory.active
    );

    const filteredItems = CollectionItemsList.filter((item) => {
        const priceFilter =
            item.currentPrice >= filter.priceRange[0] &&
            item.currentPrice <= filter.priceRange[1];
        const ageFilter =
            item.ageRange[0] >= filter.ageRange[0] &&
            item.ageRange[1] <= filter.ageRange[1];
        const categoryFilter = hasActiveSubcategory
            ? filter.subcategories.some(
                  (subcategory) =>
                      subcategory.active && subcategory.id === item.categoryID
              )
            : true;

        return priceFilter && ageFilter && categoryFilter;
    });

    const handlescclick = (i) => {
        setFilter((prevFilter) => {
            const updatedFilter = {
                ...prevFilter,
                subcategories: prevFilter.subcategories.map(
                    (subcategory, index) => {
                        if (index === i) {
                            return {
                                ...subcategory,
                                active: !subcategory.active,
                            };
                        }
                        return subcategory;
                    }
                ),
            };
            return updatedFilter;
        });
    };

    const handlePriceSliderRangeChange = (event, newValue) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            priceRange: newValue,
        }));
    };

    const handlePriceRangeChange = (newValue) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            priceRange: newValue,
        }));
    };

    const handleAgeSliderRangeChange = (event, newValue) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            ageRange: newValue,
        }));
    };

    const handleAgeRangeChange = (newValue) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            ageRange: newValue,
        }));
    };

    // const clearFilter = () => {
    //     setPriceRange([minPrice, maxPrice]);
    //     setAgeRange([minAge, maxAge]);
    // };

    return (
        <Container maxWidth="desktopMaxWidth" sx={{ mt: 12, mb: 7, px: 1 }}>
            <Box
                display="flex"
                alignItems={"center"}
                onClick={() => setCollectionOpen(true)}
                sx={{
                    cursor: "pointer",
                    color: theme.palette.text.grey[500],
                    "&:hover": { color: theme.palette.secondary.main },
                    transition: "0.25s",
                }}
            >
                <MenuOpenIcon />
                <Typography
                    variant="secondaryTitle"
                    textTransform="initial"
                    fontWeight={600}
                    ml={1}
                >
                    Filter
                </Typography>
            </Box>
            <Divider />

            <Drawer
                anchor="left"
                open={collectionOpen}
                onClose={() => setCollectionOpen(false)}
            >
                <Box
                    sx={{ width: { xs: "100vw", sm: "400px" } }}
                    height="100vh"
                    p={4}
                    className="filters"
                >
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            variant="secondaryTitle"
                            textTransform="initial"
                            fontWeight={600}
                            ml={1}
                        >
                            Filters
                        </Typography>
                        <CloseIcon
                            sx={{ mr: 1, cursor: "pointer" }}
                            onClick={() => setCollectionOpen(false)}
                        />
                    </Box>
                    <Divider fontSize="large" sx={{ my: 1 }} />

                    <Box mt={2}>
                        <FilterHeader text={"Subcategories"} />
                        <SubcategoriesFilter
                            filter={filter}
                            handlescclick={handlescclick}
                        />
                    </Box>

                    <Box mt={2}>
                        <FilterHeader text={"Price"} />
                        <Box mx={2}>
                            <Slider
                                getAriaLabel={() => "Price"}
                                value={filter.priceRange}
                                onChange={handlePriceSliderRangeChange}
                                valueLabelDisplay="auto"
                                min={minPrice}
                                max={maxPrice}
                            />
                        </Box>
                        <FilterTextFields
                            filter={filter}
                            field={"priceRange"}
                            handleRangeChange={handlePriceRangeChange}
                        />
                    </Box>

                    <Box mt={2}>
                        <FilterHeader text={"Age"} />
                        <Box mx={2}>
                            <Slider
                                getAriaLabel={() => "Age"}
                                value={filter.ageRange}
                                onChange={handleAgeSliderRangeChange}
                                valueLabelDisplay="auto"
                                min={minAge}
                                max={maxAge}
                            />
                        </Box>
                        <FilterTextFields
                            filter={filter}
                            field={"ageRange"}
                            handleRangeChange={handleAgeRangeChange}
                        />
                    </Box>
                </Box>

                <Box
                    backgroundColor="white"
                    position="fixed"
                    top="100svh"
                    sx={{
                        transform: "translateY(-100%)",
                        width: { xs: "100vw", md: "400px" },
                    }}
                ></Box>
            </Drawer>

            <Grid container>
                {filteredItems.map((item, i) => (
                    <Grid item xs={6} md={3} key={i} mt={5}>
                        <ItemCard
                            itemID={item.itemID}
                            itemImage={item.imgURL.split("|")[0]}
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
