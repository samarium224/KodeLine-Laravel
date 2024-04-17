import React, { useState } from "react";
import { Link } from "@inertiajs/react";
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
import MenuIcon from "@mui/icons-material/Menu";
import CategoryMenu from "./CategoryMenu";
import DrawerContent from "./ResponsiveDrawer";
import { NavigationCheckout } from "./Cart/Index";

const Navigation = ({ collections, auth }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartData, setcartData] = useState([]);

    const navButtonStyle = {
        color: theme.palette.text.white[500],
        mx: { xs: 1, md: 1.5 },
        fontSize: { xs: "0.66rem", md: "0.9rem" },
        fontWeight: "500",
        textTransform: "initial",
    };

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        )
            return;
        setDrawerOpen(open);
    };

    // console.log(cartData);

    const toggleCart = (open) => async (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        )
            return;

        if (open) {
            try {
                const response = await axios.get(route("cartItems"));
                setcartData(response.data);
            } catch (error) {
                console.error("Error adding item to cart:", error);
            }
        }

        setCartOpen(open);
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
                                        src="./All Images/Logo_White.png"
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
                                        src="./All Images/Logo_White.png"
                                        alt="Logo"
                                        style={{ height: "60px" }}
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
                                    sx={navButtonStyle}
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
                    <NavigationCheckout
                        cartOpen={cartOpen}
                        toggleCart={toggleCart}
                        navButtonStyle={navButtonStyle}
                        theme={theme}
                        cartData={cartData}
                        setcartData={setcartData}
                    />
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                ModalProps={{ keepMounted: true }}
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
