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

const SocialLinks = ({ collection }) => {
    const theme = useTheme();
    const informations = ["About us", "Contact us", "Terms and Conditions"];
    const collections = collection;
    const socialMedias = ["Facebook", "Instagram", "Twitter", "LinkedIn"];
    const accountOptions = ["Login"];

    const LinkList = ({ title, items }) => (
        <Box>
            <Typography
                variant="subtitle"
                color={theme.palette.text.grey[500]}
                fontWeight={400}
                mb={4}
                display="block"
            >
                {title}
            </Typography>
            {items.map((item, i) => (
                <Typography
                    key={i}
                    color={theme.palette.text.grey[500]}
                    fontWeight={300}
                    display="block"
                    mb={0.75}
                    fontSize="1.11rem"
                    sx={{ cursor: "pointer" }}
                >
                    {item}
                </Typography>
            ))}
        </Box>
    );

    const DesktopLinks = () => (
        <Box display="flex" justifyContent="space-around">
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
            <LinkList title="Follow Us" items={socialMedias} />
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
                                color={theme.palette.text.grey[500]}
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
