import { Box, useTheme } from "@mui/material";

const Copyright = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: { xs: "100vw", maxAllowableWidth: "1960px" },
                mx: "auto",
                mt: { xs: 7.5, md: 15 },
                py: { xs: 3, md: 4 },
                backgroundColor: theme.palette.text.grey[500],
                color: theme.palette.text.white[500],
                textAlign: "center",
                fontSize: { xs: "0.75rem", md: "1rem" },
            }}
        >
            All rights reserved @ Kodeline Cothing and Footwear Inc
        </Box>
    );
};

export default Copyright;
