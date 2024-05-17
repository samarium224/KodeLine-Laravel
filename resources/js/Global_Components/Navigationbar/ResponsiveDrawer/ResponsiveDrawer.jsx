import React, { useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Divider,
    Collapse,
    Typography,
    IconButton,
    Drawer,
} from "@mui/material";
import { Link } from "@inertiajs/react";

import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Collections } from "@/Global_data/Collections";
import DrawerCollectionContent from "./CollectionDrawer";
import { scrollTo } from "@/Util/scrollTo";

const FeaturedCollection = ({ label }) => (
    <Box
        sx={{
            backgroundImage: `url("./assets/bestSelling.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "50%",
            maxWidth: "180px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "180px",
            my: 1,
            mx: 0.5,
        }}
    >
        {label} <KeyboardArrowRightIcon />
    </Box>
);

const DrawerContent = ({ toggleDrawer, auth, collections }) => {
    const [collectionOpen, setCollectionOpen] = useState(false);

    const handleCollectionClick = () => {
        setCollectionOpen(!collectionOpen);
    };

    const ListItemLink = ({ primary, href }) => (
        <ListItem button component={Link} href={href}>
            <ListItemText primary={primary} />
        </ListItem>
    );

    return (
        <Box sx={{ width: "100vw" }} role="presentation">
            <Box py={2.5} pl={1} onClick={toggleDrawer(false)}>
                <KeyboardArrowLeftIcon /> Back
            </Box>
            <Divider />

            <Box display="flex">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    px={2}
                    borderRight="1px solid rgba(0,0,0,0.12)"
                >
                    <Typography py={2}>Currency: </Typography>
                    <Box
                        component="img"
                        src="../assets/Canada Flag.svg"
                        sx={{
                            height: { xs: "12px", md: "12px", lg: "16px" },
                            marginLeft: { xs: "16px", md: "8px" },
                        }}
                    />
                </Box>
                <IconButton
                    component={Link}
                    href={route("dashboard")}
                    sx={{
                        ml: { xs: 0, lg: 1 },
                        "&:hover": { backgroundColor: "transparent" },
                        px: 2,
                    }}
                >
                    <PersonIcon />
                </IconButton>
            </Box>
            <Divider />

            <List sx={{ py: 0 }}>
                <ListItemLink primary="Home" href={route("home")} />
                <Divider />

                <ListItem button onClick={handleCollectionClick}>
                    <ListItemText primary="Collections" />
                    <KeyboardArrowRightIcon />
                </ListItem>
                <Divider />

                <Drawer
                    anchor="left"
                    open={collectionOpen}
                    onClose={() => setCollectionOpen(false)}
                >
                    <DrawerCollectionContent
                        toggleDrawer={setCollectionOpen}
                        collections={collections}
                    />
                </Drawer>
                <Box onClick={() => scrollTo("about-us")}>
                    <ListItem onClick={toggleDrawer(false)}>
                        <ListItemText primary="About us" />
                    </ListItem>
                </Box>
                <Divider />

                <ListItemLink
                    primary={auth.user ? "My Account" : "Log In"}
                    href={auth.user ? route("dashboard") : route("login")}
                />
                <Divider />

                <Box onClick={() => scrollTo("footer")}>
                    <ListItem onClick={toggleDrawer(false)}>
                        <ListItemText primary="Contact us" />
                    </ListItem>
                </Box>
                <Divider />
            </List>

            {/* <Box display="flex" width="100%" justifyContent="center">
                <FeaturedCollection label="Signature Items" />
                <FeaturedCollection label="BestSelling" />
            </Box> */}
        </Box>
    );
};

export default DrawerContent;
