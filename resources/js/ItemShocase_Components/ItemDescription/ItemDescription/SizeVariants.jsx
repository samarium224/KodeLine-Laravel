import { Button, Typography, Box, useTheme } from "@mui/material";

const SizeVariants = ({ sizes, selectedIndex, onChangeSize }) => {
    const theme = useTheme();

    return (
        <Box className="sizes" mt={5}>
            <Typography
                variant="itemdescTitle"
                display="block"
                color={theme.palette.text.grey[500]}
                mb={3}
            >
                Size <span style={{ fontWeight: "200" }}>|</span>{" "}
                <Typography
                    variant="itemdescSubtitle"
                    color={theme.palette.text.grey[500]}
                    textTransform="initial"
                    fontWeight="300"
                >
                    Age
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
                        "&:hover": {
                            backgroundColor: theme.palette.text.grey[800],
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
