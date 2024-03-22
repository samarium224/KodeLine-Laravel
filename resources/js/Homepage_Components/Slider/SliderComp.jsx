import CustomButton from "@/Global_Components/CustomButton";
import { Box, Typography, useTheme } from "@mui/material";

const SliderComp = ({ image }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundImage: `url("./assets/Home Background.png")`,
                backgroundPosition: "left bottom",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "110vh",
            }}
        >
            <Box
                height="60%"
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                ml={theme.containerMarginWidth - 8}
                lineHeight="50px"
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
