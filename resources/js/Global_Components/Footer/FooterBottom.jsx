import { Box, Typography, useTheme } from "@mui/material";

const FooterBottom = () => {
    const theme = useTheme();
    const informations = ["About us", "Contact us", "Terms and Conditions"];
    const collections = [
        "Boys Summer Collections",
        "Girls Summer Collections",
        "All Season Shoes Collection",
    ];
    const socialMedias = ["Facebook", "Instagram", "Twitter", "LinkedIn"];
    const accountOptions = ["Login"];

    return (
        <Box
            display="flex"
            justifyContent="space-around"
            mx={theme.containerMarginWidth}
        >
            <Box>
                <Typography
                    variant="subtitle"
                    color={theme.palette.text.grey[500]}
                    fontWeight={400}
                    mb={4}
                    display="block"
                >
                    Information
                </Typography>
                {informations.map((information, i) => (
                    <Typography
                        key={i}
                        color={theme.palette.text.grey[500]}
                        fontWeight={400}
                        display="block"
                        mb={0.75}
                        fontSize="1.25rem"
                        sx={{ cursor: "pointer" }}
                    >
                        {information}
                    </Typography>
                ))}
            </Box>
            <Box>
                <Typography
                    variant="subtitle"
                    color={theme.palette.text.grey[500]}
                    fontWeight={400}
                    mb={4}
                    display="block"
                >
                    Collections
                </Typography>{" "}
                {collections.map((collection, i) => (
                    <Typography
                        key={i}
                        color={theme.palette.text.grey[500]}
                        fontWeight={400}
                        display="block"
                        mb={0.75}
                        fontSize="1.25rem"
                        sx={{ cursor: "pointer" }}
                    >
                        {collection}
                    </Typography>
                ))}
            </Box>
            <Box>
                <Typography
                    variant="subtitle"
                    color={theme.palette.text.grey[500]}
                    fontWeight={400}
                    mb={4}
                    display="block"
                >
                    Follow Us
                </Typography>{" "}
                {socialMedias.map((socialMedia, i) => (
                    <Typography
                        key={i}
                        color={theme.palette.text.grey[500]}
                        fontWeight={400}
                        display="block"
                        mb={0.75}
                        fontSize="1.25rem"
                        sx={{ cursor: "pointer" }}
                    >
                        {socialMedia}
                    </Typography>
                ))}
            </Box>
            <Box>
                <Typography
                    variant="subtitle"
                    color={theme.palette.text.grey[500]}
                    fontWeight={400}
                    mb={4}
                    display="block"
                >
                    My Account
                </Typography>
                {accountOptions.map((accountOption, i) => (
                    <Typography
                        key={i}
                        color={theme.palette.text.grey[500]}
                        fontWeight={400}
                        display="block"
                        mb={0.75}
                        fontSize="1.25rem"
                        sx={{ cursor: "pointer" }}
                    >
                        {accountOption}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};
export default FooterBottom;
