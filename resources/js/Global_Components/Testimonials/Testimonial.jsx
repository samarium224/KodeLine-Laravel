import { Box, Typography, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Testimonial = ({ userRating, userCommentTitle, userCommentDesc }) => {
    const theme = useTheme();
    const rating = userRating;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const quotationStyle = {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "2rem",
        fontWeight: "800",
        color: theme.palette.text.grey[800],
        display: "inline",
    };

    const getStars = () => {
        return (
            <Box textAlign="center" mb={2.5} s>
                {Array(fullStars)
                    .fill(0)
                    .map((_, index) => (
                        <StarIcon key={`full-${index}`} />
                    ))}
                {hasHalfStar && <StarHalfIcon />}
                {Array(emptyStars)
                    .fill(0)
                    .map((_, index) => (
                        <StarBorderIcon key={`empty-${index}`} />
                    ))}
            </Box>
        );
    };

    return (
        <Box position="relative" height="400px" mx={10}>
            <Box
                position="absolute"
                top="47.5%"
                sx={{ transform: "translateY(-50%)" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                color={theme.palette.text.grey[800]}
            >
                {getStars()}
                <Box mb={3} textAlign="center">
                    <Typography
                        fontFamily="'Poppins', sans-serif"
                        fontSize="1.3rem"
                        fontWeight="500"
                        color={theme.palette.text.grey[500]}
                    >
                        <Typography sx={quotationStyle}>“</Typography>
                        {userCommentTitle}
                        <Typography sx={quotationStyle}>”</Typography>
                    </Typography>
                </Box>
                <Typography
                    fontFamily="'Poppins', sans-serif"
                    fontSize="1.1rem"
                    fontWeight="500"
                    lineHeight="1.4rem"
                    color={theme.palette.text.grey[500]}
                >
                    {userCommentDesc}
                </Typography>
            </Box>
        </Box>
    );
};

export default Testimonial;
