import { Box } from "@mui/material";

const ItemDescriptionImages = () => {
    const images = ["", "", "", ""];
    return (
        <Box display="flex" width="55%" justifyContent="space-between">
            <Box
                className="inactive-item-images"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
            >
                {images.map((image, i) => (
                    <Box
                        className="active-item-image"
                        backgroundColor="lightGrey"
                        key={i}
                        width="180px"
                        height="calc((100% - 30px) / 4)"
                        sx={{ aspectRatio: "1 / 1" }}
                    />
                ))}
            </Box>
            <Box
                ml="10px"
                className="active-item-image"
                backgroundColor="lightGrey"
                width="100%"
                height="100%"
            ></Box>
        </Box>
    );
};

export default ItemDescriptionImages;
