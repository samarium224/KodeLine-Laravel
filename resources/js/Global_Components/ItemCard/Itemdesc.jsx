import { Typography, Box, useTheme } from "@mui/material";

const Itemdesc = ({ mainText, ageRange, currentPrice, oldPrice }) => {
    const theme = useTheme();
    return (
        <Box width="300px" textAlign="center">
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
                    fontSize="1.5rem"
                    color={theme.palette.text.grey[500]}
                    fontWeight="400"
                >
                    ${currentPrice.toFixed(2)}
                </Typography>
                {oldPrice && (
                    <Typography
                        mx={0.75}
                        fontSize="1.5rem"
                        color={theme.palette.text.grey[200]}
                        fontWeight="400"
                        sx={{ textDecoration: "line-through" }}
                    >
                        ${oldPrice.toFixed(2)}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default Itemdesc;
