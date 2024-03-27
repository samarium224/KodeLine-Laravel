import ItemCard from "@/Global_Components/ItemCard/ItemCard";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

const ShopByCategorySection = ({ category, reverse = false }) => {
    const theme = useTheme();
    return (
        <Container
            maxWidth="desktopMaxWidth"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 20,
                flexDirection: reverse && "row-reverse",
            }}
        >
            <Box
                width="48.75%"
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Box
                    width="100%"
                    height="1000px"
                    mb={2.5}
                    sx={{
                        backgroundImage: `url(${category.categoryImage})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                />
                <Typography
                    variant="secondaryTitle"
                    color={theme.palette.text.grey[500]}
                    textTransform="uppercase"
                    display="block"
                    mb={1}
                >
                    {category.categoryTitle}
                </Typography>
            </Box>
            <Box
                width="48.75%"
                height="100%"
                display="flex"
                flexDirection="column"
            >
                <Grid container height="50%">
                    {category.categoryItemList
                        .slice(0, 2)
                        .map((CategoryItem, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                                <ItemCard
                                    itemImage={CategoryItem.imgURL}
                                    itemTitle={CategoryItem.itemTitle}
                                    ageRange={CategoryItem.ageRange}
                                    currentPrice={CategoryItem.currentPrice}
                                    oldPrice={CategoryItem.oldPrice}
                                />
                            </Grid>
                        ))}
                </Grid>
                <Grid container height="50%" mt={5}>
                    {category.categoryItemList
                        .slice(2)
                        .map((CategoryItem, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                                <ItemCard
                                    itemImage={CategoryItem.imgURL}
                                    itemTitle={CategoryItem.itemTitle}
                                    ageRange={CategoryItem.ageRange}
                                    currentPrice={CategoryItem.currentPrice}
                                    oldPrice={CategoryItem.oldPrice}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default ShopByCategorySection;
