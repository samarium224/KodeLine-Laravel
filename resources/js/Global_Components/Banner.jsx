import { Box, Typography, useTheme } from "@mui/material";

const Banner = ({ text, variant, sx = {} }) => {
    const theme = useTheme();
    const mergedStyles = {
        ...sx,
        width: { md: "80%", xs: "95%" },
    };

    return (
        <>
            <Box width="100%" height="20px" backgroundColor={"#CD864A"}></Box>
            <Box
                width="100%"
                backgroundColor={"#EED8C3"}
                textAlign="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Typography
                    variant={variant}
                    color={theme.palette.text.grey[500]}
                    py={5}
                    sx={mergedStyles}
                >
                    {text}
                </Typography>
            </Box>
        </>
    );
};

export default Banner;
