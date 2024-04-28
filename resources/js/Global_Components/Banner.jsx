import { Box, Typography, useTheme } from "@mui/material";

const Banner = ({ text, variant, sx = {} }) => {
    const theme = useTheme();
    const mergedStyles = {
        ...sx,
        width: { maxAllowableWidth: "1800px", md: "75%", xs: "95%" },
    };

    return (
        <>
            {/* <Box width="100%" height="20px" backgroundColor={"#CD864A"}></Box> */}
            <Box
                width="100%"
                backgroundColor="#dadada"
                textAlign="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mx="auto"
                sx={{
                    height: { xs: "14vh", maxAllowableWidth: "150px" },
                    width: { xs: "100vw", maxAllowableWidth: "1960px" },
                }}
            >
                <Typography
                    variant={variant}
                    color={theme.palette.secondary.main}
                    sx={mergedStyles}
                    py={1}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </Box>
        </>
    );
};

export default Banner;
