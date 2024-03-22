import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Box,
    useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryMenu from "./CategoryMenu";
import CurrencyMenu from "./CurrencyMenu";

const Navigation = () => {
    const theme = useTheme();
    const { auth } = usePage().props;
    const [currency, setCurrency] = useState("USD");

    const handleCurrencyChange = (value) => {
        setCurrency(value);
    };

    const navButtonStyle = {
        color: theme.palette.text.grey[500],
        mx: 1.5,
        fontSize: "0.9rem",
        fontWeight: "600",
    };

    return (
        <Box position="relative">
            <AppBar
                position="absolute"
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    width: "90%",
                    left: "5%",
                    top: 10,
                }}
            >
                <Toolbar sx={{ mt: 1 }}>
                    {/* Logo Image */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="logo"
                        sx={{ borderRadius: "0px" }}
                    >
                        <img
                            src="./assets/Logo Final.png"
                            alt="Logo"
                            style={{ height: "40px" }}
                        />
                    </IconButton>

                    {/* Navigation Links */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <CategoryMenu color={theme.palette.text.grey[500]} />
                        <Button sx={navButtonStyle}>About us</Button>
                        <Link href={route('collection')}>
                            <Button sx={navButtonStyle}>Collection</Button>
                        </Link>
                        <Link href={route('itemshowcase')}>
                            <Button sx={navButtonStyle}>Item Showcase</Button>
                        </Link>
                        <Button sx={navButtonStyle}>BLOG</Button>
                        {!auth.user && (
                            <>
                                <Link href={route('login')} >
                                    <Button sx={{ color: theme.palette.text.grey[500]}}>Log In</Button>
                                </Link>
                                <Link href={ route('register') }>
                                    <Button sx={{ color: theme.palette.text.grey[500]}}>Register</Button>
                                </Link>
                            </>
                        )}
                        {auth.user && (
                            <Link href={route('dashboard')} >
                                <Button sx={{ color: theme.palette.text.grey[500]}}>My Account</Button>
                            </Link>
                        )}
                    </Box>

                    {/* Cart and Currency */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CurrencyMenu
                            currency={currency}
                            onCurrencyChange={handleCurrencyChange}
                            color={theme.palette.text.grey[500]}
                        />
                        <IconButton
                            sx={{ color: theme.palette.text.grey[500] }}
                        >
                            <ShoppingCartIcon />
                        </IconButton>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
