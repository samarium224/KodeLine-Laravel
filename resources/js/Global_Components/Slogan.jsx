import { Box, Typography } from "@mui/material";

const Slogan = () => {
    return (
        <Box
            backgroundColor="#231F20"
            textAlign="center"
            sx={{ py: { xl: 3, md: 1.75 } }}
        >
            <Typography
                variant="subtitle"
                color="white"
                sx={{
                    fontWeight: 700,
                    fontSize: { xl: "1.25rem", md: "1rem" },
                }}
            >
                2000+ curated global designs, Free 48-hour shipping in Regina,
                Secure payments
            </Typography>
        </Box>
    );
};

export default Slogan;
