import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    Box,
    Button,
    Container,
    Collapse,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialLinks = ({ collection }) => {
    const theme = useTheme();
    const informations = ["About us", "Contact us", "Terms and Conditions"];
    const collections = collection;
    const socialMedias = ["Facebook", "Instagram", "Twitter", "LinkedIn"];
    const socialMediaLinks = [
        { icon: <FacebookIcon fontSize="small" />, label: "Facebook" },
        { icon: <InstagramIcon fontSize="small" />, label: "Instagram" },
        { icon: <TwitterIcon fontSize="small" />, label: "Twitter" },
        { icon: <LinkedInIcon fontSize="small" />, label: "LinkedIn" },
    ];
    const accountOptions = ["Login"];

    const LinkList = ({ title, items }) => {
        return (
            <Box>
                <Typography
                    variant="subtitle"
                    color={theme.palette.text.white[500]}
                    fontWeight={600}
                    mb={2}
                    display="block"
                >
                    {title}
                </Typography>
                {items.map((item, i) => (
                    <Typography
                        key={i}
                        color={theme.palette.text.white[500]}
                        fontWeight={300}
                        display="block"
                        fontSize="1.11rem"
                        sx={{ cursor: "pointer" }}
                    >
                        {typeof item === "string" ? (
                            item
                        ) : (
                            <>
                                {item.icon}
                                <span style={{ marginLeft: 12 }}>
                                    {item.label}
                                </span>
                            </>
                        )}
                    </Typography>
                ))}
            </Box>
        );
    };

    const DesktopLinks = () => (
        <Box display="flex" justifyContent="space-around" py={6}>
            <Link href={route("home")}>
                <Box display="flex" height="100%" alignItems="center">
                    <Box
                        component="img"
                        src="./assets/Logo.svg"
                        alt="Logo"
                        sx={{ height: { md: "48px", xl: "60px" }, py: "auto" }}
                    />
                </Box>
            </Link>
            <LinkList title="Information" items={informations} />
            <LinkList
                title="Collections"
                items={collections.map((collection) => (
                    <Link
                        href={route("collection", {
                            id: collection.collection_id,
                        })}
                        key={collection.collection_id}
                    >
                        {collection.collection_name} Collection
                    </Link>
                ))}
            />
            <LinkList title="Follow Us" items={socialMediaLinks} />
            <LinkList title="My Account" items={accountOptions} />
        </Box>
    );

    const MobileLinkList = ({ title, items }) => {
        const [expanded, setExpanded] = useState(false);
        return (
            <Box mb={1.75}>
                <Button
                    onClick={() => setExpanded(!expanded)}
                    sx={{
                        pl: 0,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        "&:active": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <Typography variant="subtitle" display="block">
                        {title}
                    </Typography>
                    <CloseIcon
                        fontSize="small"
                        sx={{
                            rotate: expanded ? "0deg" : "45deg",
                            transition: "0.2s all ease",
                            scale: "0.8",
                        }}
                    />
                </Button>
                <Collapse in={expanded} unmountOnExit>
                    <Box sx={{ mt: 0.25 }}>
                        {items.map((item, i) => (
                            <Typography
                                key={i}
                                color={theme.palette.text.white[500]}
                                fontWeight={300}
                                display="block"
                                mb={0.75}
                                fontSize="0.8rem"
                                sx={{ cursor: "pointer" }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Collapse>
            </Box>
        );
    };

    const MobileLinks = () => (
        <Box>
            <MobileLinkList title="Information" items={informations} />
            <MobileLinkList
                title="Collections"
                items={collections.map((collection) => (
                    <Link
                        href={route("collection", {
                            id: collection.collection_id,
                        })}
                        key={collection.collection_id}
                    >
                        {collection.collection_name} Collection
                    </Link>
                ))}
            />
            <MobileLinkList title="Follow Us" items={socialMedias} />
            <MobileLinkList title="My Account" items={accountOptions} />
        </Box>
    );

    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Container maxWidth="desktopMaxWidth">
            {isMobile ? <MobileLinks /> : <DesktopLinks />}
        </Container>
    );
};
export default SocialLinks;
