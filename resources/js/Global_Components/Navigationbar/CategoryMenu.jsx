import { Link } from "@inertiajs/react";
import { Box, Divider, Typography } from "@mui/material";

const CategoryMenu = ({
    theme,
    navButtonStyle,
    collections,
    collectionOpen,
}) => {
    return (
        <Box
            color={navButtonStyle.color}
            display={collectionOpen ? "flex" : "none"}
            justifyContent="space-between"
            p={3}
        >
            {collections.map((collection, i) => (
                <Box
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
                        <Typography color={theme.palette.secondary.main}>
                            {collection.collection_name}
                        </Typography>
                    </Link>
                    <Divider />
                </Box>
            ))}
        </Box>
    );
};

export default CategoryMenu;
