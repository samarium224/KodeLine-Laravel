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

const DrawerCollectionContent = ({ toggleDrawer, collections }) => {
    const ListItemLink = ({ collection, href }) => {
        const [collectionOpen, setCollectionOpen] = useState(false);
        console.log(collection);
        return (
            <>
                <ListItem
                    button
                    onClick={() => setCollectionOpen(!collectionOpen)}
                    href={href}
                >
                    <ListItemText primary={collection.collection_name} />{" "}
                    {collectionOpen ? (
                        <KeyboardArrowUpIcon />
                    ) : (
                        <KeyboardArrowDownIcon />
                    )}
                </ListItem>
                <Divider />
                <Collapse in={collectionOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {collection.subcategories.map((subcategory, i) => (
                            <ListItem
                                button
                                key={i}
                                component={Link}
                                sx={{ pl: 4 }}
                                href={route("collection", {
                                    id: collection.collection_id,
                                })}
                            >
                                <ListItemText primary={subcategory} />
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
                        collection={collection}
                        sx={{ pl: 4 }}
                        href={route("collection", {
                            id: collection.collection_id,
                        })}
                    />
                ))}
            </List>
        </Box>
    );
};

export default DrawerCollectionContent;
