import { Box, Button, Container, Typography, useTheme } from "@mui/material";

const FooterTop = () => {
    const theme = useTheme();
    return (
        <Box backgroundColor={theme.palette.primary.main}>
            <Box
                sx={{
                    backgroundImage: {
                        xs: `url("./assets/New_6_9.png")`,
                        sm: `url("./assets/New.png")`,
                    },
                    backgroundPosition: "right bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: { xs: "100%", maxAllowableWidth: "1920px" },
                    height: {
                        xs: "600px",
                        lg: "100vh",
                        maxAllowableWidth: "1000px",
                    },
                    mx: "auto",
                }}
            >
                <Container maxWidth="xl" sx={{ position: "relative" }}>
                    <Typography
                        variant="headline"
                        sx={{
                            position: "absolute",
                            color: theme.palette.text.grey[500],
                            transform: {
                                xs: "translate(-50%, -50%)",
                                md: "initial",
                            },
                            top: { xs: "120px", md: "25vh", xl: "250px" },
                            left: { xs: "50%", md: "37.5%" },
                            textAlign: { md: "left", xs: "center" },
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
                            display: { md: "initial", xs: "none" },
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
