import { Box, Typography, useTheme } from "@mui/material";

const ServiceComponent = ({ text, subText, imgURL }) => {
    const theme = useTheme();
    return (
        <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: { md: "28.5%", xs: "100%" }, mb: { md: 0, xs: 2.5 } }}
        >
            <Box
                component={"img"}
                src={imgURL}
                sx={{ height: "60px", marginBottom: 2 }}
            />
            <Typography
                variant="secondaryTitle"
                color={"1d1d1b"}
                display="block"
            >
                {text}
            </Typography>
            <Typography
                variant="itemdescSubtitle"
                display="block"
                color={theme.palette.text.grey[500]}
                sx={{
                    mt: { md: 1, xs: 0.5 },
                    width: { xs: "75%", md: "100%" },
                }}
                dangerouslySetInnerHTML={{ __html: subText }}
            />
        </Box>
    );
};

export default ServiceComponent;
