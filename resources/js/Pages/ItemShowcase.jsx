import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme_desktop from "@/Theme/theme_desktop";
import theme_laptop from "@/Theme/theme_laptop";
import theme_laptop_sm from "@/Theme/theme_laptop_sm";
import theme_mobile from "@/Theme/theme_mobile";
import { Box } from "@mui/material";

import { breakpoint_values } from "@/Theme/breakpoints";
import useWindowSize from "@/Util/useWindowSize";

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
        AppLogo,
    } = usePage().props;

    const { width } = useWindowSize();

    const getTheme = () => {
        if (width > breakpoint_values.xl) return theme_desktop;
        else if (width > breakpoint_values.lg) return theme_laptop;
        else if (width > breakpoint_values.md) return theme_laptop_sm;
        else return theme_mobile;
    };

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
            <ThemeProvider theme={getTheme()}>
                {/* <Slogan /> */}
                <Navigation
                    collections={collections}
                    auth={auth}
                    alternativeColor={true}
                    logo={AppLogo}
                />
                <ItemDescription product={product} />
                {/* <Header title="You may also like" /> */}
                <BestSellingItems
                    bestSellingItemsList={filteredBestsellingItems}
                    collections={bestsellingCollection}
                    title="Best Selling Items"
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
