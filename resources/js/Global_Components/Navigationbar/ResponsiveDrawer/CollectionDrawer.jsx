import React, { useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Divider,
    Typography,
    IconButton,
    Collapse,
} from "@mui/material";
import { Link } from "@inertiajs/react";

import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Collections } from "@/Global_data/Collections";

const DrawerCollectionContent = ({ toggleDrawer, collections }) => {
    const ListItemLink = ({ primary, href }) => {
        const [collectionOpen, setCollectionOpen] = useState(false);
        return (
            <>
                <ListItem
                    button
                    onClick={() => setCollectionOpen(!collectionOpen)}
                    href={href}
                >
                    <ListItemText primary={primary} />{" "}
                    {collectionOpen ? (
                        <KeyboardArrowUpIcon />
                    ) : (
                        <KeyboardArrowDownIcon />
                    )}
                </ListItem>
                <Divider />
                <Collapse in={collectionOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {collections.map((collection, i) => (
                            <ListItem
                                button
                                key={i}
                                component={Link}
                                // href={route("collection", {
                                //     id: collection.collection_id,
                                // })}
                                sx={{ pl: 4 }}
                            >
                                <ListItemText
                                    primary={collection.collection_name}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                <Divider />
            </>
        );
    };

    return (
        <Box sx={{ width: "100vw" }} role="presentation">
            <Box py={2.5} pl={1} onClick={() => toggleDrawer(false)}>
                <KeyboardArrowLeftIcon /> Collections
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

            <List component="div" disablePadding>
                {collections.map((collection) => (
                    <ListItemLink
                        key={collection.collection_id}
                        primary={collection.collection_name}
                        href={route("collection", {
                            id: collection.collection_id,
                        })}
                        sx={{ pl: 4 }}
                    />
                ))}
            </List>
        </Box>
    );
};

export default DrawerCollectionContent;
