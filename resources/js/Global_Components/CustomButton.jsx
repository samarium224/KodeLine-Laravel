import { Box, Button, useTheme } from "@mui/material";

const CustomButton = ({ text, sx = {} }) => {
    const theme = useTheme();

    return (
        <Box>
            <Button
                sx={{
                    color: theme.palette.text.grey[500],
                    backgroundColor: theme.palette.text.white[100],
                    fontWeight: "600",
                    px: 7.5,
                    py: 1,
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
