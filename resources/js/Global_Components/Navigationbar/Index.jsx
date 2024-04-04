import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Button,
    Container,
    useTheme,
    useMediaQuery,
    Drawer,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryMenu from "./CategoryMenu";
import DrawerContent from "./DrawerContent";

const Navigation = ({ collections, auth }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navButtonStyle = {
        color: theme.palette.text.grey[500],
        mx: { xs: 1, md: 1.5 },
        fontSize: { xs: "0.66rem", md: "0.9rem" },
        fontWeight: "600",
    };

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            <AppBar
                position="absolute"
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    transform: "translateX(-50%)",
                    left: "47.5%",
                    top: { md: 10, xs: 4 },
                    mx: "2.5%",
                }}
            >
                <Toolbar sx={{ mt: 1 }}>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer(true)}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Link href={route("home")}>
                                    <img
                                        src="./assets/Logo Final.png"
                                        alt="Logo"
                                        style={{ height: "20px" }}
                                    />
                                </Link>
                            </Box>
                        </>
                    ) : (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="logo"
                                sx={{ borderRadius: "0px" }}
                            >
                                <Link href={route("home")}>
                                    <img
                                        src="./assets/Logo Final.png"
                                        alt="Logo"
                                        style={{ height: "30px" }}
                                    />
                                </Link>
                            </IconButton>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Link href={route("home")}>
                                    <Button sx={navButtonStyle}>Home</Button>
                                </Link>
                                <CategoryMenu
                                    color={theme.palette.text.grey[500]}
                                    collections={collections}
                                />
                                <Button sx={navButtonStyle}>About us</Button>
                                {auth.user ? (
                                    <Link href={route("dashboard")}>
                                        <Button sx={navButtonStyle}>
                                            My Account
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link href={route("login")}>
                                        <Button sx={navButtonStyle}>
                                            Log In
                                        </Button>
                                    </Link>
                                )}
                            </Box>
                        </>
                    )}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button
                            sx={navButtonStyle}
                            aria-controls="currency-menu"
                            aria-haspopup="true"
                        >
                            Currency: $CAD
                        </Button>
                        <IconButton
                            sx={{ color: theme.palette.text.grey[500] }}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <DrawerContent
                    toggleDrawer={toggleDrawer}
                    auth={auth}
                    theme={theme}
                />
            </Drawer>
        </Container>
    );
};

export default Navigation;
