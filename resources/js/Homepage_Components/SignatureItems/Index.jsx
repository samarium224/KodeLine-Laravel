import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import SignatureItemsHeader from "./SignatureItemsHeader";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import SignatureItemsSlider from "./SignatureItemsSlider";

// import { collections, signatureItemsList } from "./data";

const SignatureItems = ({ signatureItemsList, collections }) => {
    const [currentCollectionID, setCurrentCollectionID] = useState(-1);

    const filteredItemsList =
        currentCollectionID === -1
            ? signatureItemsList
            : signatureItemsList.filter(
                  (item) => item.collection_id === currentCollectionID
              );

    if (signatureItemsList.length > 0)
        return (
            <Container maxWidth="desktopMaxWidth">
                <Box sx={{ mb: { md: 15, xs: 10 } }}>
                    <SignatureItemsHeader
                        title="Shop our must-have picks!"
                        categoryList={collections}
                        setCurrentCollectionID={setCurrentCollectionID}
                    />
                    <SignatureItemsSlider>
                        {filteredItemsList.map((signatureItem, i) => (
                            <ItemCard
                                key={i}
                                itemID={signatureItem.itemID}
                                itemImage={signatureItem.imgURL}
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
