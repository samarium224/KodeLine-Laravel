import { Box, Button, Typography, useTheme } from "@mui/material";

const SliderComp = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                mx: "auto",
                backgroundImage: `url("./assets/Home Background_1960_700.png")`,
                backgroundPosition: "center bottom",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: { md: "100%", xl: "1960px" },
                height: { md: `75vh`, xl: "700px" },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    lineHeight: "50px",
                    height: "100%",
                    mx: { xs: 5, xl: 15 },
                }}
            >
                <Typography
                    variant="headline"
                    display="block"
                    color={theme.palette.text.grey[500]}
                    sx={{
                        fontSize: { xl: "3rem", md: "2.25rem" },
                        mb: { xl: 4, md: 1 },
                    }}
                >
                    Wrap Your Little Ones in Love
                </Typography>
                <Typography
                    variant="subtitle"
                    display="block"
                    color={theme.palette.text.grey[500]}
                    width="40%"
                    sx={{
                        lineHeight: { xl: "1.8rem", md: "1.45rem" },
                        fontSize: { xl: "1.25rem", md: "1.1rem" },
                        mb: { xl: 5, md: 3 },
                    }}
                >
                    Simplify parenting decisions with our thoughtfully curated
                    kid's fashion
                </Typography>
                <Box>
                    <Button
                        sx={{
                            color: theme.palette.text.grey[500],
                            backgroundColor: theme.palette.text.white[100],
                            fontWeight: "600",
                            fontSize: { xl: "1.1rem", md: "0.9rem" },
                            px: { xl: 8, md: 5 },
                            py: { xl: 1.66, md: 1.2 },
                            "&:hover": { backgroundColor: "#cdcdd0" },
                        }}
                    >
                        Shop now
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default SliderComp;