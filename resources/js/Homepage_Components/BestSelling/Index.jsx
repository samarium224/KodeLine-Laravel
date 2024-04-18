import { Box, Button, Container, Grid, useTheme } from "@mui/material";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import BestSellingHeader from "./BestSellingHeader";
// import { bestSellingItemsList, collections } from "./data";

const BestSellingItems = ({ bestSellingItemsList, collections }) => {
    const theme = useTheme();

    if (bestSellingItemsList.length > 0)
        return (
            <Container maxWidth="desktopMaxWidth" sx={{ p: "0px" }}>
                <Box mx={theme.containerMarginWidth} mt={7.5} mb={20}>
                    <BestSellingHeader
                        title="Best Selling Items"
                        collections={collections}
                    />
                    <Box
                        height="50%"
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        mt={5}
                    >
                        {bestSellingItemsList.map((signatureItem, i) => (
                            <Box
                                key={i}
                                width="100%"
                                display="flex"
                                justifyContent="center"
                            >
                                <ItemCard
                                    itemID={signatureItem.itemID}
                                    itemImage={signatureItem.imgURL}
                                    itemTitle={signatureItem.itemTitle}
                                    ageRange={signatureItem.ageRange}
                                    currentPrice={signatureItem.currentPrice}
                                    oldPrice={signatureItem.oldPrice}
                                    animationDelay={0.2 + (i % 2) * 0.15}
                                />
                            </Box>
                        ))}
                    </Box>
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
                                    backgroundColor:
                                        theme.palette.text.grey[500],
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
