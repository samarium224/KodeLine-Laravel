import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const ItemShopQuantity = ({ theme }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <Box className="quantity" mt={5}>
            <Typography
                variant="itemdescTitle"
                display="block"
                color={theme.palette.text.grey[500]}
                my={1}
            >
                Quantity
            </Typography>
            <Box display="flex" alignItems="center">
                <Button
                    px={0.5}
                    py={0}
                    sx={{
                        minWidth: "0px",
                        color: theme.palette.text.grey[500],
                    }}
                    onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                >
                    -
                </Button>
                <Typography
                    display="inline"
                    color={theme.palette.text.grey[500]}
                    backgroundColor={theme.palette.primary.main}
                    mx={1}
                    px={2.75}
                    py={1}
                >
                    {quantity}
                </Typography>
                <Button
                    px={0.5}
                    py={0}
                    sx={{
                        minWidth: "0px",
                        color: theme.palette.text.grey[500],
                    }}
                    onClick={() => setQuantity(Math.min(quantity + 1, 9))}
                >
                    +
                </Button>
            </Box>
        </Box>
    );
};

export default ItemShopQuantity;
