import { Link } from "@inertiajs/react";
import { IconButton, Box, Button } from "@mui/material";

const DesktopToolbar = ({
    auth,
    collectionOpen,
    setCollectionOpen,
    navButtonStyle,
    alternativeColor,
}) => (
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
                    sx={{ height: { md: "36px", lg: "72px", xl: "80px" } }}
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
            <Button
                sx={navButtonStyle}
                onClick={() => setCollectionOpen(!collectionOpen)}
            >
                Collections
            </Button>
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

export default DesktopToolbar;
