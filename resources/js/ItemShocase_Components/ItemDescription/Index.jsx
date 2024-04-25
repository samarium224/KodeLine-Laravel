import { Container, useTheme } from "@mui/material";
import ItemDescriptionImages from "./ItemDescriptionImages";
import ItemDescriptionTexts from "./ItemDescription/Index";

const ItemDescription = ({ product }) => {
    const theme = useTheme();
    return (
        <Container
            maxWidth="desktopMaxWidth"
            sx={{
                display: "flex",
                mt: { xs: 12, md: 20 },
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
            }}
        >
            <ItemDescriptionImages itemData={product} />
            <ItemDescriptionTexts itemData={product} />
        </Container>
    );
};

export default ItemDescription;
