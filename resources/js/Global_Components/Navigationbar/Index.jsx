import { Link, usePage } from "@inertiajs/react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Box,
    Container,
    useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryMenu from "./CategoryMenu";
import CurrencyMenu from "./CurrencyMenu";

const Navigation = () => {
    const theme = useTheme();
    const { auth } = usePage().props;
    // const [currency, setCurrency] = useState("USD");

    // const handleCurrencyChange = (value) => {
    //     setCurrency(value);
    // };

    const navButtonStyle = {
        color: theme.palette.text.grey[500],
        mx: 1.5,
        fontSize: "0.9rem",
        fontWeight: "600",
    };

    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            <AppBar
                position="absolute"
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    transform: "translateX(-50%)",
                    left: "50%",
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
                        <Link href={route("home")}>
                            <img
                                src="./assets/Logo Final.png"
                                alt="Logo"
                                style={{ height: "30px" }}
                            />
                        </Link>
                    </IconButton>

                    {/* Navigation Links */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {/* <CategoryMenu color={theme.palette.text.grey[500]} /> */}
                        <Link href={route("collection")}>
                            <Button sx={navButtonStyle}>Home</Button>
                        </Link>

                        <CategoryMenu color={theme.palette.text.grey[500]} />

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
                    </Box>

                    {/* Cart and Currency */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {/* <CurrencyMenu
                            currency={currency}
                            onCurrencyChange={handleCurrencyChange}
                            color={theme.palette.text.grey[500]}
                        /> */}
                        <Button sx={navButtonStyle}>Currency: $CAD</Button>
                        <IconButton
                            sx={{ color: theme.palette.text.grey[500] }}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Navigation;
