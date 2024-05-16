import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Container,
    useTheme,
    useMediaQuery,
    Drawer,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import CategoryMenu from "./CategoryMenu";
import DrawerContent from "./ResponsiveDrawer/ResponsiveDrawer";
import { NavigationCheckout } from "./Cart/Index";
import DesktopToolbar from "./DesktopToolbar";

const Navigation = ({ auth, collections, alternativeColor = false }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartData, setCartData] = useState([]);
    const [collectionOpen, setCollectionOpen] = useState(false);
    if (collectionOpen) alternativeColor = true;

    const navButtonStyle = {
        color: alternativeColor
            ? theme.palette.text.grey[500]
            : theme.palette.text.white[500],
        mx: { xs: 1, md: 0.75, lg: 1.1, xl: 1.5 },
        fontSize: { xs: "0.66rem", md: "0.8rem", lg: "1.05rem", xl: "1.2rem" },
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
        setCartOpen(open);
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(route("cartItems"));
                setCartData(response.data);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

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
                        style={{ height: "72px" }}
                    />
                </Link>
            </Box>
        </>
    );

    return (
        <Box>
            <Container sx={{ position: "relative" }}>
                <AppBar
                    className="navbar"
                    position="absolute"
                    sx={{
                        backgroundColor: collectionOpen
                            ? "rgba(255, 255, 255, 1)"
                            : "rgba(255, 255, 255, 0)",
                        boxShadow: "none",
                        transform: "translateX(-50%)",
                        transition: "0.2s",
                        left: "50%",
                        px: "5vw",
                        width: { xs: "100vw", maxAllowableWidth: "1750px" },
                    }}
                    onMouseLeave={() =>
                        collectionOpen && setCollectionOpen(false)
                    }
                >
                    <Toolbar
                        sx={{ px: 1, mt: -1, justifyContent: "space-between" }}
                    >
                        {isMobile ? (
                            <MobileToolbar />
                        ) : (
                            <DesktopToolbar
                                auth={auth}
                                collectionOpen={collectionOpen}
                                setCollectionOpen={setCollectionOpen}
                                navButtonStyle={navButtonStyle}
                                alternativeColor={alternativeColor}
                            />
                        )}
                        <NavigationCheckout
                            cartOpen={cartOpen}
                            toggleCart={toggleCart}
                            navButtonStyle={navButtonStyle}
                            theme={theme}
                            cartData={cartData}
                            setcartData={setCartData}
                            bucketImgUrl={
                                alternativeColor
                                    ? "../assets/Bucket_Black.svg"
                                    : "../assets/Bucket.svg"
                            }
                        />
                    </Toolbar>
                    <CategoryMenu
                        theme={theme}
                        navButtonStyle={navButtonStyle}
                        collections={collections}
                        collectionOpen={collectionOpen}
                    />
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
        </Box>
    );
};

export default Navigation;
