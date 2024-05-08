import React, { useEffect } from "react";
import { Link } from "@inertiajs/react";
import { Box, Divider, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

const CategoryMenu = ({
    theme,
    navButtonStyle,
    collections,
    collectionOpen,
}) => {
    navButtonStyle.mx = 0;
    navButtonStyle.fontSize = {
        xs: "0.56rem",
        md: "0.68rem",
        lg: "0.8925rem",
        xl: "1.02rem",
    };

    const fadeFromTop = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };
    const flashIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    const mainControls = useAnimation();

    useEffect(() => {
        mainControls.start(collectionOpen ? "visible" : "hidden");
    }, [collectionOpen]);

    return (
        <Box
            color={navButtonStyle.color}
            display={collectionOpen ? "flex" : "none"}
            justifyContent="flex-start"
            flexWrap="wrap"
            gap="32px"
            p={3}
        >
            {collections.map((collection, i) => (
                <Box
                    component={motion.div}
                    variants={fadeFromTop}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                    key={i}
                    sx={{
                        width: `calc(${100 / collections.length}% - 32px)`,
                        maxWidth: "calc(25% - 32px)",
                    }}
                >
                    <Link
                        href={route("collection", {
                            id: collection.collection_id,
                        })}
                    >
                        <Typography
                            sx={{
                                color: theme.palette.text.grey[500],
                                "&:hover": {
                                    color: theme.palette.secondary.main,
                                },
                            }}
                            fontWeight="600"
                        >
                            {collection.collection_name}
                        </Typography>
                    </Link>
                    <Divider sx={{ my: 1 }} />
                    {collection.subcategories &&
                        collection.subcategories.map((subcategoty, j) => (
                            <Link
                                key={j}
                                href={route("collection", {
                                    id: collection.collection_id,
                                    category_id: collection.subcategory_id[j],
                                })}
                            >
                                <Typography
                                    component={motion.div}
                                    variants={flashIn}
                                    initial="hidden"
                                    animate={mainControls}
                                    transition={{
                                        duration: 0.05,
                                        delay: 0.1 + j * 0.025,
                                    }}
                                    sx={{
                                        ...navButtonStyle,
                                        my: 1,
                                        "&:hover": {
                                            color: theme.palette.secondary.main,
                                        },
                                    }}
                                >
                                    {subcategoty}
                                </Typography>
                            </Link>
                        ))}
                </Box>
            ))}
        </Box>
    );
};

export default CategoryMenu;
