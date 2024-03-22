import CustomButton from "@/Global_Components/CustomButton";
import { Box, Container, Typography, useTheme } from "@mui/material";

const FooterTop = () => {
    const theme = useTheme();
    return (
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
                <CustomButton
                    text="SHOP NOW"
                    sx={{
                        position: "absolute",
                        backgroundColor: theme.palette.text.white[100],
                        top: { lg: "50vh", xl: "475px" },
                        left: "37.5%",
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        px: 10,
                        py: 2,
                    }}
                />
            </Container>
        </Box>
    );
};

export default FooterTop;
