import React, { useState } from "react";
import { Box, Container, Button, useTheme } from "@mui/material";
import SignatureItemsHeader from "./SignatureItemsHeader";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import SignatureItemsSlider from "./SignatureItemsSlider";
import { Link } from "@inertiajs/react";

// import { collections, signatureItemsList } from "./data";

const SignatureItems = ({ signatureItemsList, collections }) => {
    const theme = useTheme();
    const [currentCollectionID, setCurrentCollectionID] = useState(-1);

    const filteredItemsList =
        currentCollectionID === -1
            ? signatureItemsList
            : signatureItemsList.filter(
                (item) => item.collection_id === currentCollectionID
            );

    if (signatureItemsList.length > 0)
        return (
            <Container maxWidth="desktopMaxWidth" sx={{ px: 0 }}>
                <Box sx={{ mb: 6 }}>
                    <SignatureItemsHeader
                        title="Shop our must-have picks!"
                        categoryList={collections}
                        currentCollectionID={currentCollectionID}
                        setCurrentCollectionID={setCurrentCollectionID}
                    />
                    <Box
                        sx={{
                            mx: { sm: 6, xl: 3 },
                        }}
                    >
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
                    <Box display="flex" justifyContent="center">
                        <Link
                            href={route("featuredItem")}
                        >
                            <Button
                                sx={{
                                    color: theme.palette.text.grey[500],
                                    backgroundColor: "transparent",
                                    border: `2px solid ${theme.palette.text.grey[500]}`,
                                    fontWeight: "500",
                                    fontSize: {
                                        xl: "1.1rem",
                                        md: "0.85rem",
                                        xs: "0.8rem",
                                    },
                                    px: { xl: 8, md: 5, xs: 3 },
                                    py: { xl: 1.5, md: 1.2, xs: 1 },
                                    mt: 5,
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.text.grey[500],
                                        color: theme.palette.text.white[500],
                                    },
                                }}
                            >
                                View All
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        );
};

export default SignatureItems;
