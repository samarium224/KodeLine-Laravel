import { Container } from "@mui/material";
import ItemDescriptionImages from "./ItemDescriptionImages";
import ItemDescriptionTexts from "./ItemDescription/Index";

const ItemDescription = ({ product }) => {
    return (
        <Container
            maxWidth="desktopMaxWidth"
            sx={{
                display: "flex",
                mt: { xs: 15, md: 20 },
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
