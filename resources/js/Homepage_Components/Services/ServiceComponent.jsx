import { Box, Typography, useTheme } from "@mui/material";

const ServiceComponent = ({ text, subText, animationDelay }) => {
    const theme = useTheme();
    return (
        <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: { md: "28.5%", xs: "100%" }, mb: { md: 0, xs: 1 } }}
        >
            <Typography
                variant="secondaryTitle"
                color={theme.palette.text.grey[500]}
                display="block"
            >
                {text}
            </Typography>
            <Typography
                variant="subtitle"
                display="block"
                color={theme.palette.text.grey[500]}
                sx={{ mt: { md: 2, xs: 0.5 } }}
                dangerouslySetInnerHTML={{ __html: subText }}
            />
        </Box>
    );
};

export default ServiceComponent;
