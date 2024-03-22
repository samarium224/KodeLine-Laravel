import ItemCard from "@/Global_Components/ItemCard/ItemCard";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

const ShopByCategorySection = ({ reverse = false }) => {
    const theme = useTheme();
    const CategoryItemList = [
        {
            itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
            ageRange: [3, 6],
            currentPrice: 40,
            oldPrice: 50,
        },
        {
            itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
            ageRange: [3, 6],
            currentPrice: 22.5,
            oldPrice: 30,
        },
        {
            itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
            ageRange: [4, 7],
            currentPrice: 50,
            oldPrice: 65,
        },
        {
            itemTitle: "GIRL’S SUMMER FASHION OUTFIT",
            ageRange: [5, 8],
            currentPrice: 32.5,
            oldPrice: 40,
        },
    ];

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 20,
                flexDirection: reverse && "row-reverse",
            }}
        >
            <Box
                width="47.5%"
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Box
                    width="100%"
                    height="1000px"
                    mb={4}
                    sx={{
                        backgroundImage: "url('./assets/Boys_6_9.png')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                />
                <Typography
                    variant="secondaryTitle"
                    color={theme.palette.text.grey[500]}
                    display="block"
                    mb={1}
                >
                    Boy's summer fashion outfit
                </Typography>
                <Typography
                    variant="itemdescTitle"
                    color={theme.palette.text.grey[500]}
                    display="block"
                    width="60%"
                    textTransform="initial"
                >
                    Get free home delivery within Regina, Saskatchewan
                </Typography>
            </Box>
            <Box
                width="47.5%"
                height="100%"
                display="flex"
                flexDirection="column"
            >
                <Grid container height="50%">
                    {CategoryItemList.slice(0, 2).map((CategoryItem, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                            <ItemCard
                                itemTitle={CategoryItem.itemTitle}
                                ageRange={CategoryItem.ageRange}
                                currentPrice={CategoryItem.currentPrice}
                                oldPrice={CategoryItem.oldPrice}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid container height="50%" mt={5}>
                    {CategoryItemList.slice(2).map((CategoryItem, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                            <ItemCard
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
