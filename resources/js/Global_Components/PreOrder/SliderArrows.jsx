import { Box, useTheme } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const PrevArrow = ({ onClick }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "-80px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                color: theme.palette.text.grey[500],
                scale: "2.5",
                rotate: "180deg",
                transformOrigin: "50% 0%",
            }}
            onClick={onClick}
        >
            <PlayArrowIcon fontSize="large" />
        </Box>
    );
};

export const NextArrow = ({ onClick }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                right: "-80px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                color: theme.palette.text.grey[500],
                transformOrigin: "50% 0%",
                scale: "2.5",
            }}
            onClick={onClick}
        >
            <PlayArrowIcon fontSize="large" />
        </Box>
    );
};
