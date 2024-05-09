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
    const { collections, product, preOrderContent, preOrderItems, bestsellingItems, bestsellingCollection } =
        usePage().props;

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
                    bestSellingItemsList={bestsellingItems}
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
