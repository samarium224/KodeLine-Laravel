import { Typography, Box, useTheme } from "@mui/material";

const ItemNameAndPrice = ({ itemName, price }) => {
    const theme = useTheme();

    return (
        <Box>
            <Typography
                variant="secondaryTitle"
                className="item-name"
                fontWeight="500"
                display="block"
                textTransform="uppercase"
                color={theme.palette.text.grey[500]}
                mb={2}
            >
                {itemName}
            </Typography>
            <Typography
                variant="subtitle"
                className="item-price"
                fontWeight="500"
                display="block"
                color={theme.palette.text.grey[500]}
            >
                ${price.toFixed(2)}
            </Typography>
        </Box>
    );
};

export default ItemNameAndPrice;
