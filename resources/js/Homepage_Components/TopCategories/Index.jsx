import { Box, Typography, useTheme } from "@mui/material";

const TopCategories = () => {
    const topCategories = ["Girl's", "Boy's", "Winter", "Summer"];
    const theme = useTheme();

    return (
        <Box
            mx={theme.containerMarginWidth}
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
        >
            {topCategories.map((category, i) => {
                const randomImageURL = `https://picsum.photos/800/350?random=${Math.random()}`;
                return (
                    <Box
                        key={i}
                        mb={10}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "47.5%",
                            height: "350px",
                            backgroundImage: `url(${randomImageURL})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                        }}
                    >
                        <Typography
                            variant="title"
                            color={theme.palette.text.white[100]}
                        >
                            {category} Collection
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default TopCategories;
