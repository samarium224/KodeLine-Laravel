import { Typography, Box, useTheme } from "@mui/material";

const Itemdesc = ({
    mainText,
    ageRange,
    currentPrice,
    oldPrice,
    alternativeCard,
}) => {
    const theme = useTheme();
    oldPrice = oldPrice > currentPrice ? oldPrice : false;

    return (
        <Box
            sx={{
                width: { xs: "200px", md: "252px", lg: "300px" },
                scale: alternativeCard && "0.9",
            }}
            textAlign="center"
        >
            <Typography
                display="block"
                variant="itemdescTitle"
                color={theme.palette.secondary.main}
                whiteSpace={"nowrap"}
            >
                {mainText}
            </Typography>
            <Typography
                display="block"
                variant="itemdescSubtitle"
                color={theme.palette.text.grey[500]}
                my={0.5}
            >
                Age: {ageRange[0]}-{ageRange[1]} Years
            </Typography>
            <Box display="flex" justifyContent="center">
                <Typography
                    mx={0.75}
                    color={theme.palette.secondary.main}
                    fontWeight="600"
                    sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                    ${currentPrice.toFixed(2)}
                </Typography>
                {oldPrice && (
                    <Typography
                        mx={0.75}
                        color={theme.palette.text.grey[200]}
                        fontWeight="600"
                        sx={{
                            textDecoration: "line-through",
                            fontSize: { xs: "1rem", md: "1.25rem" },
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
