import { Box } from "@mui/material";
// import { itemData } from "./data";

const ItemDescriptionImages = ({itemData}) => {
    return (
        <Box display="flex" width="55%" justifyContent="space-between">
            <Box
                className="inactive-item-images"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
            >
                {itemData.imgURL.secondary.map((image, i) => (
                    <Box
                        key={i}
                        className="active-item-image"
                        width="180px"
                        height="calc((100% - 30px) / 4)"
                        sx={{
                            backgroundImage: `url(${
                                image ? image : "./assets/blank.jpg"
                            })`,
                        }}
                    />
                ))}
            </Box>
            <Box
                ml="10px"
                className="active-item-image"
                width="100%"
                height="100%"
                sx={{
                    backgroundImage: `url("${
                        itemData.imgURL.primary
                            ? itemData.imgURL.primary
                            : "./assets/blank.jpg"
                    }")`,
                }}
            ></Box>
        </Box>
    );
};

export default ItemDescriptionImages;
