import Itemdesc from "@/Global_Components/ItemCard/Itemdesc";
import ProductShowcase from "@/Global_Components/ItemCard/ProductShowcase";
import { Box } from "@mui/material";

const ItemCard = ({
    itemTitle,
    ageRange,
    currentPrice,
    oldPrice,
    buttonText,
}) => {
    const sale = Math.round(((oldPrice - currentPrice) / oldPrice) * 100);
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <ProductShowcase sale={sale > 0 && sale} buttonText={buttonText} />
            <Itemdesc
                mainText={itemTitle}
                ageRange={ageRange}
                currentPrice={currentPrice}
                oldPrice={currentPrice != oldPrice && oldPrice}
            ></Itemdesc>
        </Box>
    );
};

export default ItemCard;
