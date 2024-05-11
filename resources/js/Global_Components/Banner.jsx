import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const Banner = ({ text, variant, sx = {} }) => {
    const theme = useTheme();
    const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const mergedStyles = {
        ...sx,
        width: { maxAllowableWidth: "1800px", md: "75%", xs: "95%" },
    };

    const mobileText = isMobileScreen ? text.replace(/<br\/?>/g, " ") : text;

    return (
        <>
            <Box
                width="100%"
                backgroundColor="#dadada"
                textAlign="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mx="auto"
                id="about-us"
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
                    dangerouslySetInnerHTML={
                        !isMobileScreen ? { __html: text } : undefined
                    }
                >
                    {isMobileScreen ? mobileText : null}
                </Typography>
            </Box>
        </>
    );
};

export default Banner;
