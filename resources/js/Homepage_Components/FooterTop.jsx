import { Box, Button, Container, Typography, useTheme } from "@mui/material";

const FooterTop = () => {
    const theme = useTheme();
    return (
        <Box backgroundColor={theme.palette.primary.main}>
            <Box
                sx={{
                    backgroundImage: `url("./assets/New.png")`,
                    backgroundPosition: "right bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: { lg: "100%", xl: "1960px" },
                    height: { lg: "100vh", xl: "1060px" },
                    mx: "auto",
                }}
            >
                <Container maxWidth="xl" sx={{ position: "relative" }}>
                    <Typography
                        variant="headline"
                        sx={{
                            position: "absolute",
                            color: theme.palette.text.grey[500],
                            top: { lg: "25vh", xl: "250px" },
                            left: "37.5%",
                            fontWeight: "700",
                            width: "100%",
                        }}
                    >
                        Simplifying Choices <br /> Maximizing Convenience
                    </Typography>
                    <Button
                        sx={{
                            position: "absolute",
                            backgroundColor: theme.palette.text.white[100],
                            color: theme.palette.text.grey[500],
                            top: { lg: "50vh", xl: "475px" },
                            left: "37.5%",
                            fontSize: "1.5rem",
                            fontWeight: 400,
                            px: 10,
                            py: 2,
                        }}
                    >
                        SHOP NOW
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default FooterTop;
