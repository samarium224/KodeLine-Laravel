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

const Navigation = ({ collections, auth, alternativeColor = false }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartData, setcartData] = useState([]);

    const navButtonStyle = {
        color: alternativeColor
            ? theme.palette.text.grey[500]
            : theme.palette.text.white[500],
        mx: { xs: 1, md: 0.75, lg: 1.5 },
        fontSize: { xs: "0.66rem", md: "0.8rem", lg: "0.95rem", xl: "1.2rem" },
        fontWeight: "500",
        textTransform: "initial",
        "&:hover": { backgroundColor: "transparent" },
    };

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        )
            return;
        setDrawerOpen(open);
    };

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

    const MobileToolbar = () => (
        <>
            <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                sx={{
                    mr: 2,
                    "&:hover": { backgroundColor: "transparent" },
                    color: navButtonStyle.color,
                }}
            >
                <MenuIcon />
            </IconButton>
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                    "&:hover": { backgroundColor: "transparent" },
                }}
            >
                <Link href={route("home")}>
                    <img
                        src={
                            alternativeColor
                                ? "../assets/Kodeline kids_Black Logo.svg"
                                : "../assets/Logo.svg"
                        }
                        alt="Logo"
                        style={{ height: "30px" }}
                    />
                </Link>
            </Box>
        </>
    );

    const DesktopToolbar = () => (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="logo"
                sx={{
                    borderRadius: "0px",
                    "&:hover": { backgroundColor: "transparent" },
                }}
            >
                <Link href={route("home")}>
                    <Box
                        component="img"
                        src={
                            alternativeColor
                                ? "../assets/Kodeline kids_Black Logo.svg"
                                : "../assets/Logo.svg"
                        }
                        alt="Logo"
                        sx={{ height: { md: "36px", lg: "45px", xl: "60px" } }}
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
                <CategoryMenu sx={navButtonStyle} collections={collections} />
                <Button sx={navButtonStyle}>About us</Button>
                {auth.user ? (
                    <Link href={route("dashboard")}>
                        <Button sx={navButtonStyle}>My Account</Button>
                    </Link>
                ) : (
                    <Link href={route("login")}>
                        <Button sx={navButtonStyle}>Log In</Button>
                    </Link>
                )}
                <Button sx={navButtonStyle}>Contact us</Button>
            </Box>
        </>
    );

    return (
        <Container sx={{ position: "relative" }}>
            <AppBar
                position="absolute"
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    transform: "translateX(-50%)",
                    left: "47.5%",
                    top: { md: 8, xs: 4 },
                    mx: "2.5%",
                    width: { xs: "90vw", maxAllowableWidth: "1750px" },
                }}
            >
                <Toolbar>
                    {isMobile ? <MobileToolbar /> : <DesktopToolbar />}
                    <NavigationCheckout
                        cartOpen={cartOpen}
                        toggleCart={toggleCart}
                        navButtonStyle={navButtonStyle}
                        theme={theme}
                        cartData={cartData}
                        setcartData={setcartData}
                        bucketImgUrl={
                            alternativeColor
                                ? "../assets/Bucket_Black.svg"
                                : "../assets/Bucket.svg"
                        }
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
                    collections={collections}
                    theme={theme}
                />
            </Drawer>
        </Container>
    );
};

export default Navigation;
