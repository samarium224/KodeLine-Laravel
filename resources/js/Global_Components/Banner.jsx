import { Box, Typography, useTheme } from "@mui/material";

const Banner = ({ text, variant, sx = {} }) => {
    const theme = useTheme();

    return (
        <Box
            width="100%"
            backgroundColor={theme.palette.text.grey[100]}
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Typography
                width="60%"
                variant={variant}
                color={theme.palette.text.grey[500]}
                py={5}
                sx={sx}
            >
                {text}
            </Typography>
        </Box>
    );
};

export default Banner;
