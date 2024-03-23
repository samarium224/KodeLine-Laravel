import { Box, Container, useTheme } from "@mui/material";
import SignatureItemsHeader from "./SignatureItemsHeader";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";

const SignatureItems = () => {
    const theme = useTheme();
    let categories = ["Girls", "Boys", "Shoes"];
    let signatureItemsList = [
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
        <Container maxWidth="xl">
            <SignatureItemsHeader
                title="Shop our must-have picks!"
                categoryList={categories}
            />
            <Box
                display="flex"
                justifyContent="space-between"
                mx={theme.containerMarginWidth}
                mt={5}
                mb={20}
            >
                {signatureItemsList.map((signatureItem, i) => (
                    <ItemCard
                        key={i}
                        itemTitle={signatureItem.itemTitle}
                        ageRange={signatureItem.ageRange}
                        currentPrice={signatureItem.currentPrice}
                        oldPrice={signatureItem.oldPrice}
                    />
                ))}
            </Box>
        </Container>
    );
};

export default SignatureItems;
