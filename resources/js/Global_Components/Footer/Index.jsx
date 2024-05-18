import React, { useEffect, useRef } from "react";
import {
    Box,
    Button,
    Typography,
    useTheme,
    TextField,
    Container,
} from "@mui/material";
import { Link } from "@inertiajs/react";
import { motion, useInView, useAnimation } from "framer-motion";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";
import Header from "../Header";

const Footer = ({ collections }) => {
    const theme = useTheme();
    const fadeFromBottom = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) mainControls.start("visible");
    }, [isInView]);
    return (
        <Box mt={0} ref={ref} id="footer">
            {/* <Box
                ref={ref}
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ my: { xs: 7.5, md: 6 } }}
            >
                <Header title="Subscribe" />
                <Typography
                    variant="itemdescSubtitle"
                    component={motion.div}
                    variants={fadeFromBottom}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    color={theme.palette.text.grey[500]}
                    sx={{ width: { xs: "90%", sm: "400px" } }}
                    mb={4}
                >
                    Get the latest updates and special offers by signing up for
                    emails or following us on social media!
                </Typography>
                <Box
                    component={motion.div}
                    variants={fadeFromBottom}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    display="flex"
                    alignItems="center"
                >
                    <TextField
                        variant="outlined"
                        width="400px"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& input": { py: { xs: 1.25, md: "16.5px" } },
                                "& fieldset": {
                                    borderColor: theme.palette.primary.main,
                                    borderRadius: "0px",
                                },
                                width: { xs: "200px", md: "400px" },
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            height: { xs: "45px", md: "56px" },
                            borderRadius: "0px",
                            marginLeft: "12px",
                            px: { xs: 3, md: 5 },
                            color: theme.palette.text.white[500],
                            backgroundColor: theme.palette.secondary.main,
                            fontWeight: { xs: 700, md: 600 },
                        }}
                    >
                        Subscribe
                    </Button>
                </Box>
            </Box> */}
            <Box
                sx={{
                    width: { xs: "100%", maxAllowableWidth: "1960px" },
                    mx: "auto",
                }}
            >
                <Box
                    component={motion.div}
                    variants={fadeFromBottom}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0 }}
                    backgroundColor={theme.palette.secondary.main}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <SocialLinks collection={collections} />
                    <hr
                        style={{
                            color: theme.palette.text.white[900],
                            width: "100vw",
                        }}
                    />
                    <Copyright />
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
