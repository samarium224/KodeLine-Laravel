import CustomButton from "@/Global_Components/CustomButton";
import { Box, Typography, useTheme } from "@mui/material";

const FooterTop = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundImage: `url("./assets/New.png")`,
                backgroundPosition: "right bottom",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
            }}
        >
            <Box mx={theme.containerMarginWidth} position="relative">
                <Typography
                    variant="headline"
                    sx={{
                        position: "absolute",
                        color: theme.palette.text.grey[500],
                        top: "25vh",
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
                        top: "50vh",
                        left: "37.5%",
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        px: 10,
                        py: 2,
                    }}
                />
            </Box>
        </Box>
    );
};

export default FooterTop;
