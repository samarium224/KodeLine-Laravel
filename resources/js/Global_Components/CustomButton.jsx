import { Box, Button, useTheme } from "@mui/material";

const CustomButton = ({ text, sx = {} }) => {
    const theme = useTheme();

    return (
        <Box width="100%" display="flex" justifyContent="center">
            <Button
                sx={{
                    color: theme.palette.text.grey[500],
                    backgroundColor: theme.palette.text.white[100],
                    fontWeight: "500",
                    width: "90%",
                    py: { xs: 0.9, md: 1.25 },
                    "&:hover": { backgroundColor: "#cdcdd0" },
                    ...sx,
                }}
            >
                {text}
            </Button>
        </Box>
    );
};

export default CustomButton;
