import CustomButton from "@/Global_Components/CustomButton";
import { Box, Container, Typography, useTheme } from "@mui/material";

const SliderComp = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                mx: "auto",
                backgroundImage: `url("./assets/Home Background.png")`,
                backgroundPosition: "center bottom",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: { lg: "100%", xl: "1960px" },
                height: { lg: "105vh", xl: "1040px" },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    lineHeight: "50px",
                    height: "60%",
                    mx: 15,
                }}
            >
                <Typography
                    variant="headline"
                    display="block"
                    color={theme.palette.text.grey[500]}
                    mb={4}
                >
                    Wrap Your Little Ones in Love
                </Typography>
                <Typography
                    variant="subtitle"
                    display="block"
                    color={theme.palette.text.grey[500]}
                    width="40%"
                    mb={8}
                >
                    Simplify parenting decisions with our thoughtfully curated
                    kid's fashion
                </Typography>
                <Box>
                    <CustomButton
                        text="Shop now"
                        primary={false}
                        sx={{ px: 9, py: 2, fontSize: "1.33rem" }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default SliderComp;
