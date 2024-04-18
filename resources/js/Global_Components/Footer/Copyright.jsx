import { Box, useTheme } from "@mui/material";

const Copyright = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: "100vw",
                mt: 15,
                py: 4,
                backgroundColor: theme.palette.text.grey[500],
                color: theme.palette.text.white[500],
                textAlign: "center",
            }}
        >
            All rights reserved @ Kodeline Cothing and Footwear Inc
        </Box>
    );
};

export default Copyright;
