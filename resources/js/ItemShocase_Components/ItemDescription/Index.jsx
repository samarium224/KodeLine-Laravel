import { Container, useTheme } from "@mui/material";
import ItemDescriptionImages from "./ItemDescriptionImages";
import ItemDescriptionTexts from "./ItemDescriptionTexts";

const ItemDescription = ({product}) => {
    const theme = useTheme();
    return (
        <Container
            maxWidth="desktopMaxWidth"
            sx={{ display: "flex", my: 20, justifyContent: "space-between" }}
        >
            <ItemDescriptionImages itemData={product} />
            <ItemDescriptionTexts itemData={product}/>
        </Container>
    );
};

export default ItemDescription;
