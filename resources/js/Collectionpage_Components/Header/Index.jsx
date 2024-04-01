import { Button, Box, Typography, useTheme } from "@mui/material";

import { CollectionHeaderData } from "./Data";

const Header = () => {
    const theme = useTheme();
    return (
        <Box
            backgroundColor={theme.palette.primary.main}
            display="flex"
            justifyContent="center"
        >
            <Box
                sx={{
                    backgroundImage: {
                        xs: `url("${CollectionHeaderData.mobileBackgroundImgURL}")`,
                        md: `url("${CollectionHeaderData.backgroundImgURL}")`,
                    },
                    backgroundPosition: CollectionHeaderData.backgroundPosition,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",

                    width: { xs: "100%", maxAllowableWidth: "1960px" },
                    height: { xs: `75vh`, maxAllowableWidth: "700px" },
                }}
            >
                <Box
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    lineHeight="50px"
                    sx={{
                        mx: { md: 5, xl: 15 },
                        alignItems: {
                            xs: "center",
                            md: CollectionHeaderData.reverseAlign
                                ? "flex-end"
                                : "flex-start",
                        },
                        textAlign: {
                            xs: "center",
                            md: CollectionHeaderData.reverseAlign
                                ? "right"
                                : "left",
                        },
                    }}
                >
                    <Typography
                        variant="headline"
                        display="block"
                        color={theme.palette.text.grey[500]}
                        sx={{
                            fontSize: { xl: "3rem", md: "2.25rem" },
                            mb: { xl: 4, xs: 1 },
                        }}
                    >
                        {CollectionHeaderData.title}
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
                        {CollectionHeaderData.subtitle}
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

export default Header;
