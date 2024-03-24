import { Box, Typography, useTheme } from "@mui/material";

const ServiceComponent = ({ text, subText }) => {
    const theme = useTheme();
    return (
        <Box
            width="28.5%"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
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
                mt={2}
            >
                {subText}
            </Typography>
        </Box>
    );
};

export default ServiceComponent;
