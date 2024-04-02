import { Box, Button, Container, Grid, useTheme } from "@mui/material";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import BestSellingHeader from "./BestSellingHeader";
import { bestSellingItemsList, collections } from "./data";

const BestSellingItems = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="desktopMaxWidth" sx={{ p: "0px" }}>
            <Box mx={theme.containerMarginWidth} mt={7.5} mb={20}>
                <BestSellingHeader
                    title="Best Selling Items"
                    collections={collections}
                />
                <Grid container>
                    {bestSellingItemsList.map((signatureItem, i) => (
                        <Grid item xs={6} md={3} key={i} mt={5}>
                            <ItemCard
                                key={i}
                                itemID={signatureItem.itemID}
                                itemTitle={signatureItem.itemTitle}
                                ageRange={signatureItem.ageRange}
                                currentPrice={signatureItem.currentPrice}
                                oldPrice={signatureItem.oldPrice}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box display="flex" justifyContent="center" mt={7.55}>
                    <Button
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.text.grey[500],
                            fontSize: { xs: "0.9rem", md: "1.5rem" },
                            fontWeight: 400,
                            px: { xs: 6, md: 10 },
                            py: { xs: 1.5, md: 2 },
                            "&:hover": {
                                backgroundColor: theme.palette.primary.main,
                            },
                        }}
                    >
                        VIEW All
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default BestSellingItems;
