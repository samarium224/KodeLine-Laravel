import React from "react";
import { Box, Container } from "@mui/material";
import SignatureItemsHeader from "./SignatureItemsHeader";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import { categories, signatureItemsList } from "./data";
import SignatureItemsSlider from "./SignatureItemsSlider";

const SignatureItems = () => {
    return (
        <Container maxWidth="desktopMaxWidth">
            <Box mb={15}>
                <SignatureItemsHeader
                    title="Shop our must-have picks!"
                    categoryList={categories}
                />
                <SignatureItemsSlider>
                    {signatureItemsList.map((signatureItem, i) => (
                        <ItemCard
                            key={i}
                            itemTitle={signatureItem.itemTitle}
                            ageRange={signatureItem.ageRange}
                            currentPrice={signatureItem.currentPrice}
                            oldPrice={signatureItem.oldPrice}
                        />
                    ))}
                </SignatureItemsSlider>
            </Box>
        </Container>
    );
};

export default SignatureItems;
