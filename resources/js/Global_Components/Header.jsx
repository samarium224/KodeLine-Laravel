import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subTitle }) => {
    const theme = useTheme();
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
        >
            <Typography variant="title" color={theme.palette.text.grey[500]}>
                {title}
            </Typography>
            <Box
                backgroundColor={theme.palette.text.grey[500]}
                height="4px"
                width="100px"
                mb={2}
                mt={1}
            ></Box>
            <Typography
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
