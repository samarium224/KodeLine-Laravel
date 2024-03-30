import { Typography, Box, useTheme } from "@mui/material";

const Itemdesc = ({ mainText, ageRange, currentPrice, oldPrice }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{ width: { xs: "175px", md: "252px", lg: "300px" } }}
            textAlign="center"
        >
            <Typography
                display="block"
                variant="itemdescTitle"
                color={theme.palette.text.grey[500]}
            >
                {mainText}
            </Typography>
            <Typography
                display="block"
                variant="itemdescSubtitle"
                color={theme.palette.text.grey[500]}
                my={1}
            >
                Age: {ageRange[0]}-{ageRange[1]} Years
            </Typography>
            <Box display="flex" justifyContent="center">
                <Typography
                    mx={0.75}
                    color={theme.palette.text.grey[500]}
                    fontWeight="400"
                    sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
                >
                    ${currentPrice.toFixed(2)}
                </Typography>
                {oldPrice && (
                    <Typography
                        mx={0.75}
                        color={theme.palette.text.grey[200]}
                        fontWeight="400"
                        sx={{
                            textDecoration: "line-through",
                            fontSize: { xs: "1rem", md: "1.5rem" },
                        }}
                    >
                        ${oldPrice.toFixed(2)}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default Itemdesc;
