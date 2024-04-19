import React, { useEffect, useRef } from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";

const Header = ({ title, subTitle }) => {
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
        <Container maxWidth="desktopMaxWidth">
            <Box
                ref={ref}
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                width="100%"
            >
                <Box
                    component={motion.div}
                    variants={fadeFromBottom}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.66, delay: 0.15 }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1.5}
                    width="100%"
                >
                    <Box
                        backgroundColor={theme.palette.text.white[600]}
                        height="1px"
                        width="50%"
                    ></Box>
                    <Typography
                        variant="title"
                        color={theme.palette.text.grey[500]}
                        mx={5}
                        sx={{ flex: "1 1 auto", textWrap: "nowrap" }}
                    >
                        {title}
                    </Typography>
                    <Box
                        backgroundColor={theme.palette.text.white[600]}
                        height="1px"
                        width="50%"
                    ></Box>
                </Box>

                <Typography
                    component={motion.div}
                    variants={fadeFromBottom}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.66, delay: 0.5 }}
                    display="block"
                    variant="subtitle"
                    color={theme.palette.text.grey[500]}
                    mb={subTitle && { md: 10, xs: 5 }}
                >
                    {subTitle}
                </Typography>
            </Box>
        </Container>
    );
};

export default Header;
