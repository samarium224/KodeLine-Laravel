import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
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
        <Box
            ref={ref}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
        >
            <Typography
                component={motion.div}
                variants={fadeFromBottom}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.66, delay: 0.15 }}
                variant="title"
                color={theme.palette.text.grey[500]}
            >
                {title}
            </Typography>
            <Box
                component={motion.div}
                variants={fadeFromBottom}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.75, delay: 0.3 }}
                backgroundColor={theme.palette.text.grey[500]}
                height="4px"
                width="100px"
                mb={2}
                mt={1}
            ></Box>
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
    );
};

export default Header;
