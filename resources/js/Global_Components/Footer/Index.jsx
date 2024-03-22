import { Box, Typography, TextField, Button, useTheme } from "@mui/material";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    const theme = useTheme();
    return (
        <Box>
            <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                my={15}
            >
                <Typography
                    fontSize="2.75rem"
                    textTransform="uppercase"
                    fontWeight="500"
                    color={theme.palette.text.grey[500]}
                    letterSpacing={12}
                    display="block"
                    mb={1}
                >
                    Subscribe
                </Typography>
                <Typography
                    variant="itemdescSubtitle"
                    display="block"
                    color="primary"
                    width="400px"
                    mb={4}
                >
                    Get the latest updates and special offers by signing up for
                    emails of following us on social media
                </Typography>
                <Box display="flex" alignItems="center">
                    <TextField
                        variant="outlined"
                        width="400px"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: theme.palette.primary.main,
                                    borderRadius: "0px",
                                },
                                width: "400px",
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
                            fontWeight: 600,
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
