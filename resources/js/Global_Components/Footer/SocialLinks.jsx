import { Link } from "@inertiajs/react";
import { Box, Container, Typography, useTheme } from "@mui/material";

const SocialLinks = ({ collection }) => {
    const theme = useTheme();
    const informations = ["About us", "Contact us", "Terms and Conditions"];
    const collections = collection;
    const socialMedias = ["Facebook", "Instagram", "Twitter", "LinkedIn"];
    const accountOptions = ["Login"];

    return (
        <Container
            maxWidth="desktopMaxWidth"
            sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
            }}
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
                    <Link
                        href={route("collection", {
                            id: collection.collection_id,
                        })}
                        key={i}
                    >
                        <Typography
                            key={i}
                            color={theme.palette.text.grey[500]}
                            fontWeight={400}
                            display="block"
                            mb={0.75}
                            fontSize="1.25rem"
                            sx={{ cursor: "pointer" }}
                        >
                            {collection.collection_name} Collection
                        </Typography>
                    </Link>
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
        </Container>
    );
};
export default SocialLinks;
