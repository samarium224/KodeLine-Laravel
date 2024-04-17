import { Box, Button, Container, Grid, useTheme } from "@mui/material";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import BestSellingHeader from "./BestSellingHeader";
// import { bestSellingItemsList, collections } from "./data";

const BestSellingItems = ({ bestSellingItemsList, collections }) => {
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
                                itemImage={signatureItem.imgURL}
                                animationDelay={0.2 + (i % 4) * 0.15}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box display="flex" justifyContent="center" mt={7.55}>
                    <Button
                        sx={{
                            color: theme.palette.text.grey[500],
                            backgroundColor: "transparent",
                            border: `2px solid ${theme.palette.text.grey[500]}`,
                            fontWeight: "500",
                            fontSize: {
                                xl: "1.25rem",
                                md: "1rem",
                                xs: "0.9rem",
                            },
                            px: { xl: 9, md: 6, xs: 4 },
                            py: { xl: 1.66, md: 1.2, xs: 1 },
                            "&:hover": {
                                backgroundColor: theme.palette.text.grey[500],
                                color: theme.palette.text.white[500],
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
