import React from 'react'; // Import React
import { Box, useTheme } from "@mui/material";
import SignatureItemsHeader from "./SignatureItemsHeader";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";

// Accept props in the component function
const SignatureItems = ({ signatureItemsList }) => { // Accept signatureItemsList as a prop
    const theme = useTheme();
    let categories = ["Girls", "Boys", "Shoes"];

    return (
        <>
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
                {signatureItemsList && signatureItemsList.map((signatureItem, i) => (
                    <ItemCard
                        key={i}
                        itemTitle={signatureItem.itemTitle}
                        ageRange={signatureItem.ageRange}
                        currentPrice={signatureItem.currentPrice}
                        oldPrice={signatureItem.oldPrice}
                    />
                ))}
            </Box>
        </>
    );
};

export default SignatureItems;
