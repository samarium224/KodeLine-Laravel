import { Box, useTheme } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const PrevArrow = ({ onClick }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "-50px",
                transform: "translateY(-200%)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                color: theme.palette.text.grey[500],
                backgroundColor: theme.palette.text.grey[100],
                borderRadius: "50%",
            }}
            onClick={onClick}
        >
            <KeyboardArrowLeftIcon fontSize="large" />
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
                right: "-50px",
                transform: "translateY(-200%)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                color: theme.palette.text.grey[500],
                backgroundColor: theme.palette.text.grey[100],
                borderRadius: "50%",
            }}
            onClick={onClick}
        >
            <KeyboardArrowRightIcon fontSize="large" />
        </Box>
    );
};
