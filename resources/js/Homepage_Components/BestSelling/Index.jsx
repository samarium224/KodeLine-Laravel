import { useState } from "react";
import { Box, Button, Container, useTheme } from "@mui/material";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";
import BestSellingHeader from "./BestSellingHeader";
// import { bestSellingItemsList, collections } from "./data";

const BestSellingItems = ({ bestSellingItemsList, collections }) => {
    const theme = useTheme();

    const [currentCollectionID, setCurrentCollectionID] = useState(-1);
    const filteredItemsList =
        currentCollectionID === -1
            ? bestSellingItemsList
            : bestSellingItemsList.filter(
                  (item) => item.collection_id === currentCollectionID
              );

    const [viewingAll, setViewingAll] = useState(filteredItemsList.length < 8);

    if (bestSellingItemsList.length > 0)
        return (
            <Container maxWidth="desktopMaxWidth" sx={{ p: "0px" }}>
                <Box mx={theme.containerMarginWidth} mt={7.5} mb={15}>
                    <BestSellingHeader
                        title="Best Selling Items"
                        collections={collections}
                        setCurrentCollectionID={setCurrentCollectionID}
                    />
                    <Box
                        height="50%"
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        flexWrap="wrap"
                        mt={5}
                    >
                        {(viewingAll
                            ? filteredItemsList
                            : filteredItemsList.slice(
                                  0,
                                  Math.min(filteredItemsList.length, 8)
                              )
                        ).map((signatureItem, i) => (
                            <Box
                                key={i}
                                display="flex"
                                justifyContent="center"
                                sx={{ width: { xs: "50%", md: "25%" } }}
                                mb={5}
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

                    {!viewingAll && (
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
                                onClick={() => setViewingAll(true)}
                            >
                                VIEW All
                            </Button>
                        </Box>
                    )}
                </Box>
            </Container>
        );
};

export default BestSellingItems;
