import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/Theme/theme_desktop";
import { Box } from "@mui/material";

import Slogan from "@/Global_Components/Slogan";
import Navigation from "@/Global_Components/Navigationbar/Index";
import ItemDescription from "@/ItemShocase_Components/ItemDescription/Index";
import PreOrder from "@/Global_Components/PreOrder/Index";
import Header from "@/Global_Components/Header";
import Testimonials from "@/Global_Components/Testimonials/Index";
import Footer from "@/Global_Components/Footer/Index";

import { usePage } from "@inertiajs/react";
import BestSellingItems from "@/Homepage_Components/BestSelling/Index";

export default function ItemShowcase({ auth, laravelVersion, phpVersion }) {
    const {
        collections,
        product,
        preOrderContent,
        preOrderItems,
        bestsellingItems,
        bestsellingCollection,
    } = usePage().props;

    const [filteredBestsellingItems, setFilteredBestsellingItems] =
        useState(bestsellingItems);

    useEffect(() => {
        const fixBestSellingItems = async () => {
            try {
                const response = await axios.get(route("cartItems"));
                const responseItemIds = new Set(
                    response.data.map((item) => item.itemID)
                );
                const filtered = bestsellingItems.filter(
                    (item) => !responseItemIds.has(item.itemID)
                );
                setFilteredBestsellingItems(filtered);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fixBestSellingItems();
    }, []);

    return (
        <div style={{ overflow: "hidden" }}>
            <ThemeProvider theme={theme}>
                <Slogan />
                <Navigation
                    collections={collections}
                    auth={auth}
                    alternativeColor={true}
                />
                <ItemDescription product={product} />
                {/* <Header title="You may also like" /> */}
                <BestSellingItems
                    bestSellingItemsList={filteredBestsellingItems}
                    collections={bestsellingCollection}
                    title="You May Also Like"
                />
                <Box my={5}></Box>
                {preOrderContent && (
                    <PreOrder items={preOrderItems} content={preOrderContent} />
                )}
                <Testimonials />
                <Footer collections={collections} />
            </ThemeProvider>
        </div>
    );
}
