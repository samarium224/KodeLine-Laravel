import { Box, Button, Typography, useTheme } from "@mui/material";

const SliderComp = ({
    collectionID,
    imgURL,
    mobileImgURL,
    title,
    subtitle,
    reverseAlign = false,
    backgroundPosition = "right bottom",
}) => {
    const theme = useTheme();

    return (
        <Box backgroundColor={theme.palette.primary.main} width="100vw">
            <Box
                sx={{
                    mx: "auto",
                    backgroundImage: {
                        xs: `url("${mobileImgURL}")`,
                        md: `url("${imgURL}")`,
                    },
                    backgroundPosition: backgroundPosition,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",

                    width: { xs: "100%", maxAllowableWidth: "1960px" },
                    height: { xs: `75vh`, maxAllowableWidth: "700px" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        lineHeight: "50px",
                        height: "100%",
                        alignItems: {
                            xs: "center",
                            md: reverseAlign ? "flex-end" : "flex-start",
                        },
                        textAlign: {
                            xs: "center",
                            md: reverseAlign ? "right" : "left",
                        },
                        mx: { md: 5, xl: 15 },
                    }}
                >
                    <Typography
                        variant="headline"
                        display="block"
                        color={theme.palette.text.grey[500]}
                        sx={{
                            mb: { xl: 4, xs: 1 },
                            width: "95%",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle"
                        display="block"
                        color={theme.palette.text.grey[500]}
                        sx={{
                            width: { md: "40%", xs: "87.5%" },
                            mb: { xl: 5, md: 3, xs: 20 },
                        }}
                    >
                        {subtitle}
                    </Typography>
                    <Box>
                        <Button
                            sx={{
                                color: theme.palette.text.grey[500],
                                backgroundColor: theme.palette.text.white[100],
                                fontWeight: "500",
                                fontSize: {
                                    xl: "1.1rem",
                                    md: "0.9rem",
                                    xs: "0.825rem",
                                },
                                px: { xl: 8, md: 5, xs: 3 },
                                py: { xl: 1.66, md: 1.2, xs: 1 },
                                "&:hover": { backgroundColor: "#cdcdd0" },
                            }}
                        >
                            Shop now
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SliderComp;
