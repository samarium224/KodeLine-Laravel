import { Container, useTheme } from "@mui/material";
import ItemDescriptionImages from "./ItemDescriptionImages";
import ItemDescriptionTexts from "./ItemDescriptionTexts";

const ItemDescription = () => {
    const theme = useTheme();
    return (
        <Container
            maxWidth="desktopMaxWidth"
            sx={{ display: "flex", my: 20, justifyContent: "space-between" }}
        >
            <ItemDescriptionImages />
            <ItemDescriptionTexts />
        </Container>
    );
};

export default ItemDescription;
