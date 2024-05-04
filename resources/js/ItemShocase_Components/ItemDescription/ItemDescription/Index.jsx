import { useState } from "react";
import { Box } from "@mui/material";

import ItemNameAndPrice from "./ItemNameAndPrice";
import ColorVariants from "./ColorVariants";
import SizeVariants from "./SizeVariants";
import ShopButtonsAndQuantity from "./ShopButtonsAndQuantity";
import DescriptionText from "./DescriptionTexts";

// import { itemData } from "./data";

const ItemDescriptionTexts = ({ itemData }) => {
    const [selectedIndex, setSelectedIndex] = useState({ color: 0, size: 0 });
    console.log(itemData);

    const onChangeSize = (sizeIndex) => {
        setSelectedIndex({ ...selectedIndex, size: sizeIndex });
    };
    return (
        <Box sx={{ width: { xs: "100%", md: "35%" } }}>
            <ItemNameAndPrice
                itemName={itemData.itemName}
                price={itemData.price}
            />
            <ColorVariants
                itemID={itemData.itemID}
                colorVariants={itemData.colorVariants}
                colorIndex={itemData.colorID}
            />
            <SizeVariants
                sizes={itemData.sizes}
                selectedIndex={selectedIndex}
                onChangeSize={onChangeSize}
                sizeIndex={selectedIndex.size}
            />
            <ShopButtonsAndQuantity
                itemType={itemData.itemType}
                itemID={itemData.itemID}
                stock={itemData.stock}
            />
            <DescriptionText itemDescription={itemData.itemDescription} />
        </Box>
    );
};

export default ItemDescriptionTexts;
