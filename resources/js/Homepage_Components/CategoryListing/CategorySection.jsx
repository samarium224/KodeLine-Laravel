import ItemCard from "@/Global_Components/ItemCard/ItemCard";
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    useTheme,
} from "@mui/material";

const ShopByCategorySection = ({ category, reverse = false }) => {
    const theme = useTheme();
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
                        backgroundImage: `url(${category.categoryImage})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: { xs: "750px", md: "1000px" },
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            py: 15,
                            height: "100%",
                        }}
                    >
                        <Box
                            width="80%"
                            sx={{ textAlign: reverse ? "right" : "left" }}
                        >
                            <Typography
                                fontSize="2.5rem"
                                fontWeight="800"
                                color={theme.palette.text.grey[500]}
                                display="block"
                            >
                                {category.categoryMobileQuote.title}
                            </Typography>
                            <Typography
                                fontSize="1.33rem"
                                fontWeight="500"
                                color={theme.palette.text.grey[500]}
                                display="block"
                            >
                                {category.categoryMobileQuote.subtitle}
                            </Typography>
                        </Box>
                        <Button
                            sx={{
                                color: theme.palette.text.grey[500],
                                backgroundColor: theme.palette.text.white[100],
                                fontWeight: "500",
                                fontSize: "0.825rem",
                                px: 5,
                                py: 1.25,
                                "&:hover": { backgroundColor: "#cdcdd0" },
                            }}
                        >
                            EXPLORE
                        </Button>
                    </Box>
                </Box>
                <Typography
                    variant="secondaryTitle"
                    color={theme.palette.text.grey[500]}
                    textTransform="uppercase"
                    display="block"
                    sx={{ mb: { md: 1, xs: 8 } }}
                >
                    {category.categoryTitle}
                </Typography>
            </Box>
            <Box
                height="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ width: { md: "48.75%", xs: "100%" } }}
            >
                <Grid container height="50%">
                    {category.categoryItemList
                        .slice(0, 2)
                        .map((CategoryItem, i) => (
                            <Grid item xs={6} sm={6} key={i}>
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
                            <Grid item xs={6} sm={6} key={i}>
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
                <Button
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.text.grey[500],
                        fontSize: "0.9rem",
                        fontWeight: 400,
                        px: 5,
                        py: 1.5,
                        mt: 3.5,
                        display: { xs: "block", md: "none" },
                        "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                        },
                    }}
                >
                    EXPLORE MORE
                </Button>
            </Box>
        </Container>
    );
};

export default ShopByCategorySection;
