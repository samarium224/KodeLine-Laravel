import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Divider,
    Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const DrawerContent = ({ toggleDrawer, auth, theme }) => {
    const [collectionOpen, setCollectionOpen] = useState(false);

    const handleCollectionClick = () => {
        setCollectionOpen(!collectionOpen);
    };

    return (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(true)}
            onKeyDown={toggleDrawer(true)}
        >
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
                        <ListItem button sx={{ pl: 4 }}>
                            <ListItemText primary="Collection 1" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }}>
                            <ListItemText primary="Collection 2" />
                        </ListItem>
                        {/* Add more collection items as needed */}
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
