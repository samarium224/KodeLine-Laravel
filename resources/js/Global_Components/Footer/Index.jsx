import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme, Container } from "@mui/material";
import { Link } from "@inertiajs/react";
import { motion, useInView, useAnimation } from "framer-motion";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";

const Footer = ({ collections }) => {
    const theme = useTheme();
    const fadeFromBottom = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    const socialMediaLinks = [
        { icon: <FacebookIcon />, label: "Facebook" },
        { icon: <InstagramIcon />, label: "Instagram" },
        { icon: <TwitterIcon />, label: "Twitter" },
        { icon: <LinkedInIcon />, label: "LinkedIn" },
        { icon: <YouTubeIcon />, label: "Youtube" },
    ];

    useEffect(() => {
        if (isInView) mainControls.start("visible");
    }, [isInView]);
    return (
        <Box mt={2.5} ref={ref}>
            <Container maxWidth="desktopMaxWidth" sx={{ px: 0 }}>
                <Box
                    display="flex"
                    sx={{
                        justifyContent: { xs: "space-around", sm: "flex-end" },
                    }}
                    mb={8}
                >
                    {socialMediaLinks.map((link, index) => (
                        <Box
                            key={index}
                            component={Link}
                            color={theme.palette.text.grey[500]}
                            textAlign="center"
                            display="flex"
                            alignItems="center"
                            sx={{
                                flexDirection: { xs: "column", sm: "row" },
                                ml: { xs: 0, sm: 4 },
                            }}
                        >
                            {link.icon}
                            <Typography variant="subtitle" ml={0.5}>
                                {link.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
            {/* <Box
                ref={ref}
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ my: { xs: 7.5, md: 10 } }}
            >
                <Typography
                    textTransform="uppercase"
                    fontWeight="500"
                    color={theme.palette.text.grey[500]}
                    component={motion.div}
                    variants={fadeFromBottom}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    mb={1}
                    sx={{
                        fontSize: { xs: "1.5rem", md: "2.75rem" },
                        letterSpacing: { xs: 8, md: 12 },
                    }}
                >
                    Subscribe
                </Typography>
                <Typography
                    variant="itemdescSubtitle"
                    component={motion.div}
                    variants={fadeFromBottom}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    color={theme.palette.text.grey[500]}
                    width="400px"
                    mb={4}
                >
                    Get the latest updates and special offers by signing up for
                    emails of following us on social media!
                </Typography>
                <Box
                    component={motion.div}
                    variants={fadeFromBottom}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    display="flex"
                    alignItems="center"
                    sx={{ flexDirection: { xs: "column", md: "row" } }}
                >
                    <TextField
                        variant="outlined"
                        width="400px"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: theme.palette.primary.main,
                                    borderRadius: "0px",
                                },
                                width: { xs: "300px", md: "400px" },
                                mb: { md: 0, xs: 2 },
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            height: "56px",
                            borderRadius: "0px",
                            marginLeft: "12px",
                            px: 5,
                            color: theme.palette.text.white[500],
                            fontWeight: { xs: 700, md: 600 },
                        }}
                    >
                        Subscribe
                    </Button>
                </Box>
            </Box> */}
            <Box
                component={motion.div}
                variants={fadeFromBottom}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0 }}
            >
                <SocialLinks collection={collections} />
            </Box>
            <Copyright />
        </Box>
    );
};

export default Footer;
