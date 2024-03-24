import { Box, Grid, Container, useTheme } from "@mui/material";
import SignatureItemsHeader from "./SignatureItemsHeader";
import ItemCard from "../../Global_Components/ItemCard/ItemCard";

// Accept props in the component function
const SignatureItems = ({ signatureItemsList }) => { // Accept signatureItemsList as a prop
    const theme = useTheme();
    let categories = ["Girls", "Boys", "Shoes"];

    return (
        <Container maxWidth="desktopMaxWidth">
            <Box mb={15}>
                <SignatureItemsHeader
                    title="Shop our must-have picks!"
                    categoryList={categories}
                />
                <Grid container>
                    {signatureItemsList.map((signatureItem, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i} mt={5}>
                            <ItemCard
                                key={i}
                                itemTitle={signatureItem.itemTitle}
                                ageRange={signatureItem.ageRange}
                                currentPrice={signatureItem.currentPrice}
                                oldPrice={signatureItem.oldPrice}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default SignatureItems;
