import React, { useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Divider,
    Collapse,
} from "@mui/material";
import { Link } from "@inertiajs/react";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";

import { Collections } from "@/Global_data/Collections";

const DrawerContent = ({ toggleDrawer, auth, theme, collections }) => {
    const [collectionOpen, setCollectionOpen] = useState(false);

    const handleCollectionClick = () => {
        setCollectionOpen(!collectionOpen);
    };

    return (
        <Box sx={{ width: "100vw" }} role="presentation">
            <Box pt={3} pb={2} pl={1} onClick={toggleDrawer(false)}>
                <ClearIcon /> Close
            </Box>
            <hr />
            <List>
                <ListItem button component={Link} href={route("home")}>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={handleCollectionClick}>
                    <ListItemText primary="Collections" />
                    {collectionOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={collectionOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {collections.map((collection, i) => (
                            <ListItem
                                button
                                key={i}
                                component={Link}
                                href={route("collection", {
                                    id: collection.collection_id,
                                })}
                                sx={{ pl: 4 }}
                            >
                                <ListItemText
                                    primary={collection.collection_name}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemText primary="About Us" />
                </ListItem>
                {auth.user ? (
                    <ListItem button component={Link} href={route("dashboard")}>
                        <ListItemText primary="My Account" />
                    </ListItem>
                ) : (
                    <ListItem button component={Link} href={route("login")}>
                        <ListItemText primary="Log In" />
                    </ListItem>
                )}
            </List>
            <Divider />
        </Box>
    );
};

export default DrawerContent;
