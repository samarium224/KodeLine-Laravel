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
        fontSize: { md: "2rem", xs: "1.35rem" },
        fontWeight: "800",
        color: theme.palette.text.grey[800],
        display: "inline",
    };

    const getStars = () => {
        return (
            <Box textAlign="center" mb={1}>
                {Array(fullStars)
                    .fill(0)
                    .map((_, index) => (
                        <StarIcon fontSize="small" key={`full-${index}`} />
                    ))}
                {hasHalfStar && <StarHalfIcon fontSize="small" />}
                {Array(emptyStars)
                    .fill(0)
                    .map((_, index) => (
                        <StarBorderIcon
                            fontSize="small"
                            key={`empty-${index}`}
                        />
                    ))}
            </Box>
        );
    };

    return (
        <Box position="relative" height="300px" sx={{ mx: { xs: 2, md: 10 } }}>
            <Box
                position="absolute"
                top="47.5%"
                sx={{ transform: "translateY(-50%)" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                color={theme.palette.text.grey[800]}
                textAlign="center"
            >
                {getStars()}
                <Box mb={2} textAlign="center">
                    <Typography
                        fontFamily="'Poppins', sans-serif"
                        fontWeight="600"
                        color={theme.palette.secondary.main}
                        sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" } }}
                    >
                        <Typography component={"span"} sx={quotationStyle}>
                            “
                        </Typography>
                        {userCommentTitle}
                        <Typography component={"span"} sx={quotationStyle}>
                            ”
                        </Typography>
                    </Typography>
                </Box>
                <Typography
                    fontFamily="'Poppins', sans-serif"
                    fontWeight="500"
                    lineHeight="1.4rem"
                    color={theme.palette.text.grey[500]}
                    sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }}
                >
                    {userCommentDesc}
                </Typography>
            </Box>
        </Box>
    );
};

export default Testimonial;
