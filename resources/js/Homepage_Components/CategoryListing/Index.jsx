import { Box } from "@mui/material";
import ShopByCategorySection from "./CategorySection";
import Header from "@/Global_Components/Header";

const ShopByCategory = () => {
    const CatrgoryItemList = [
        { category: "Boy's", categoryImage: "imageURL", items: {} },
        { category: "Boy's", categoryImage: "imageURL", items: {} },
        { category: "Boy's", categoryImage: "imageURL", items: {} },
    ];
    return (
        <Box>
            <Header
                title="Shop by Category"
                subTitle="Handpicked Happiness for Little Ones!"
            />
            {CatrgoryItemList.map((CatrgoryItem, i) => (
                <ShopByCategorySection
                    key={i}
                    category={CatrgoryItem.category}
                    reverse={i % 2 == 0}
                />
            ))}
        </Box>
    );
};

export default ShopByCategory;
