import { Box, Grid, useTheme } from "@mui/material";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import BestSellingHeader from "./BestSellingHeader";
import CustomButton from "@/Global_Components/CustomButton";

const BestSellingItems = () => {
    const theme = useTheme();
    const categoryList = ["Girls", "Boys", "Shoes"];
    let bestSellingItemsList = [
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
        <>
            <Box mx={theme.containerMarginWidth} mt={7.5} mb={20}>
                <BestSellingHeader
                    title="Best Selling Items"
                    categoryList={categoryList}
                />
                <Grid container>
                    {bestSellingItemsList.map((signatureItem, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i} mt={5}>
                            <ItemCard
                                itemTitle={signatureItem.itemTitle}
                                ageRange={signatureItem.ageRange}
                                currentPrice={signatureItem.currentPrice}
                                oldPrice={signatureItem.oldPrice}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box display="flex" justifyContent="center" mt={7.55}>
                    <CustomButton
                        text="VIEW All"
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            fontSize: "1.5rem",
                            fontWeight: 400,
                            px: 10,
                            py: 2,
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};

export default BestSellingItems;
