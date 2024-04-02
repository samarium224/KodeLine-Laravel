import { Box } from "@mui/material";
import ShopByCategorySection from "./CategorySection";
import Header from "@/Global_Components/Header";

// import { CollectionItemList } from "./data";

const ShopByCategory = ({CollectionItemList}) => {
    return (
        <Box>
            <Header
                title="Shop by Category"
                subTitle="Handpicked Happiness for Little Ones!"
            />
            {CollectionItemList.slice(0, 3).map((CollectionItem, i) => (
                <ShopByCategorySection
                    key={i}
                    category={CollectionItem}
                    reverse={i % 2 == 0}
                />
            ))}
        </Box>
    );
};

export default ShopByCategory;
