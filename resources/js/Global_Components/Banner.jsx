import { Box, Typography, useTheme } from "@mui/material";

const Banner = ({ text, variant, sx = {} }) => {
    const theme = useTheme();
    const mergedStyles = {
        ...sx,
        width: { md: "75%", xs: "95%" },
    };

    return (
        <>
            {/* <Box width="100%" height="20px" backgroundColor={"#CD864A"}></Box> */}
            <Box
                width="100%"
                backgroundColor={theme.palette.text.grey[500]}
                textAlign="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="17.5vh"
            >
                <Typography
                    variant={variant}
                    color={theme.palette.text.white[500]}
                    sx={mergedStyles}
                >
                    {text}
                </Typography>
            </Box>
        </>
    );
};

export default Banner;
