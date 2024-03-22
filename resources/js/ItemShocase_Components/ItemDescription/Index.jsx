import { Box, useTheme } from "@mui/material";
import ItemDescriptionImages from "./ItemDescriptionImages";
import ItemDescriptionTexts from "./ItemDescriptionTexts";

const ItemDescription = () => {
    const theme = useTheme();
    return (
        <Box
            display="flex"
            mx={theme.containerMarginWidth}
            my={20}
            justifyContent="space-between"
        >
            <ItemDescriptionImages />
            <ItemDescriptionTexts />
        </Box>
    );
};

export default ItemDescription;
