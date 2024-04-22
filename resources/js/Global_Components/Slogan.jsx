import { Box, Typography } from "@mui/material";

const Slogan = () => {
    return (
        <Box
            backgroundColor="#231F20"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                height: { xl: "56px", md: "49px", xs: "30px" },
                width: { xs: "100vw", maxAllowableWidth: "1960px" },
            }}
            textAlign="center"
            mx="auto"
        >
            <Typography
                variant="subtitle"
                color="white"
                sx={{
                    fontWeight: 600,
                    fontSize: { xl: "1.1rem", md: "0.9rem", xs: "0.5rem" },
                }}
            >
                Up to 30% Savings, Free 48-hour shipping in Regina, Secure
                payment
            </Typography>
        </Box>
    );
};

export default Slogan;
