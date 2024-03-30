import { Box, Typography, TextField, Button, useTheme } from "@mui/material";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    const theme = useTheme();
    return (
        <Box my={5}>
            <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ my: { xs: 7.5, md: 10 } }}
            >
                <Typography
                    textTransform="uppercase"
                    fontWeight="500"
                    color={theme.palette.text.grey[500]}
                    display="block"
                    mb={1}
                    sx={{
                        fontSize: { xs: "1.5rem", md: "2.75rem" },
                        letterSpacing: { xs: 8, md: 12 },
                    }}
                >
                    Subscribe
                </Typography>
                <Typography
                    variant="itemdescSubtitle"
                    display="block"
                    color={theme.palette.text.grey[500]}
                    width="400px"
                    mb={4}
                >
                    Get the latest updates and special offers by signing up for
                    emails of following us on social media!
                </Typography>
                <Box
                    display="flex"
                    alignItems="center"
                    sx={{ flexDirection: { xs: "column", md: "row" } }}
                >
                    <TextField
                        variant="outlined"
                        width="400px"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: theme.palette.primary.main,
                                    borderRadius: "0px",
                                },
                                width: { xs: "300px", md: "400px" },
                                mb: 2,
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            height: "56px",
                            borderRadius: "0px",
                            marginLeft: "12px",
                            px: 5,
                            color: theme.palette.text.grey[500],
                            fontWeight: { xs: 700, md: 600 },
                        }}
                    >
                        Subscribe
                    </Button>
                </Box>
            </Box>
            <FooterBottom />
        </Box>
    );
};

export default Footer;
