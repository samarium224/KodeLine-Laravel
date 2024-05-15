import { Button, Typography, Box, useTheme } from "@mui/material";

const SizeVariants = ({ sizes, selectedIndex, onChangeSize }) => {
    const theme = useTheme();

    if (sizes.length > 0)
        return (
            <Box className="sizes" mt={3}>
                <Typography
                    variant="itemdescTitle"
                    display="block"
                    textTransform="initial"
                    color={theme.palette.text.grey[500]}
                    mb={1.5}
                >
                    Age <span style={{ fontWeight: "200" }}>|</span>{" "}
                    <Typography
                        variant="itemdescSubtitle"
                        color={theme.palette.text.grey[500]}
                        fontSize="0.9rem"
                        textTransform="initial"
                        fontWeight="300"
                    >
                        {sizes[selectedIndex.size]}
                    </Typography>
                </Typography>
                {sizes.map((size, i) => (
                    <Button
                        key={i}
                        sx={{
                            textTransform: "initial",
                            color:
                                selectedIndex.size === i
                                    ? theme.palette.text.white[100]
                                    : theme.palette.text.grey[500],
                            backgroundColor:
                                selectedIndex.size === i
                                    ? theme.palette.text.grey[500]
                                    : "transparent",
                            border:
                                selectedIndex.size !== i &&
                                `1px solid ${theme.palette.primary.main}`,
                            py: 1.5,
                            mr: 1,
                            mb: 1,
                            width: "100px",
                            textAlign: "center",
                            fontSize: "0.9rem",
                            "&:hover": {
                                backgroundColor: theme.palette.text.grey[800],
                                color: theme.palette.text.white[500],
                                cursor: "pointer",
                            },
                        }}
                        onClick={() => onChangeSize(i)}
                    >
                        {size}
                    </Button>
                ))}
            </Box>
        );
};

export default SizeVariants;
