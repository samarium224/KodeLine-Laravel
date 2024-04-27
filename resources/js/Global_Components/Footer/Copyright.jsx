import { Box, useTheme } from "@mui/material";

const Copyright = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: { xs: "100vw", maxAllowableWidth: "1960px" },
                mx: "auto",
                py: { xs: 3, md: 3 },
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.white[500],
                textAlign: "center",
                fontSize: { xs: "0.75rem", md: "1rem" },
            }}
        >
            Copyrights &#169; 2024 Kodeline Cothing and Footwear Inc. An
            initiative of MapleKode Creatives Inc.
        </Box>
    );
};

export default Copyright;
