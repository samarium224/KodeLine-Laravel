import { Link } from "@inertiajs/react";
import { Container, Box, useTheme, Button } from "@mui/material";

const TopCategories = ({ RestCategories }) => {
    const theme = useTheme();

    return (
        <Container maxWidth="desktopMaxWidth" sx={{ p: "0px" }}>
            <Box
                mx={theme.containerMarginWidth}
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                mb={4}
            >
                {RestCategories.slice(3).map((category, i) => {
                    const ImageURL = category.ImgUrl;

                    return (
                        <Box
                            key={i}
                            mb={4}
                            mx={2}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: { xs: "95%", sm: "75%", md: "46%" },
                                height: {
                                    xs: "300px",
                                    sm: "250px",
                                    lg: "350px",
                                },
                                backgroundImage: `url(${ImageURL})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                            }}
                        >
                            <Link
                                href={route("collection", {
                                    id: category.collection_id,
                                })}
                            >
                                <Button
                                    sx={{
                                        color: theme.palette.text.white[500],
                                        backgroundColor: "transparent",
                                        border: `2px solid ${theme.palette.text.white[500]}`,
                                        fontWeight: "500",
                                        fontSize: {
                                            xl: "1.25rem",
                                            md: "1rem",
                                            xs: "0.9rem",
                                        },
                                        px: { xl: 9, md: 6, xs: 4 },
                                        py: { xl: 1.66, md: 1.2, xs: 1 },
                                        "&:hover": {
                                            backgroundColor:
                                                theme.palette.text.white[500],
                                            color: theme.palette.text.grey[500],
                                        },
                                    }}
                                >
                                    {category.collection_name} Collection
                                </Button>
                            </Link>
                        </Box>
                    );
                })}
            </Box>
        </Container>
    );
};

export default TopCategories;
