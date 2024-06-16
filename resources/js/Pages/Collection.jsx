import { ThemeProvider } from "@mui/material/styles";
import theme_desktop from "@/Theme/theme_desktop";
import theme_laptop from "@/Theme/theme_laptop";
import theme_laptop_sm from "@/Theme/theme_laptop_sm";
import theme_mobile from "@/Theme/theme_mobile";
import { breakpoint_values } from "@/Theme/breakpoints";

import useWindowSize from "@/Util/useWindowSize";

import Navigation from "@/Global_Components/Navigationbar/Index";
import Header from "@/Collectionpage_Components/Header/Index";
import Products from "@/Collectionpage_Components/Products/Index";
import PreOrder from "@/Global_Components/PreOrder/Index";
import Testimonials from "@/Global_Components/Testimonials/Index";
import Footer from "@/Global_Components/Footer/Index";
import Slogan from "@/Global_Components/Slogan";

// import { preorderItems } from "@/Global_data/PreorderItems";
import { usePage } from "@inertiajs/react";

export default function Collection({ auth }) {
    const {
        collections,
        collection_info,
        collectionItemList,
        preOrderContent,
        preOrderItems,
        selectedCategories,
        selectedCategoryID,
        AppLogo,
    } = usePage().props;
    const { width } = useWindowSize();

    const getTheme = () => {
        if (width > breakpoint_values.xl) return theme_desktop;
        else if (width > breakpoint_values.lg) return theme_laptop;
        else if (width > breakpoint_values.md) return theme_laptop_sm;
        else return theme_mobile;
    };

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
                {/* <Header CollectionHeaderData={collection_info} /> */}
                {/* <Banner
                    text={`EXPLORE ${collection_info['category_name'].toUpperCase()} COLLECTION`}
                    variant="title"
                    sx={{
                        fontWeight: 500,
                        letterSpacing: { xs: "7.5px", md: "10px" },
                        wordSpacing: { xs: "12px", md: "15px;" },
                    }}
                /> */}
                <Products
                    CollectionItemsList={collectionItemList}
                    selectedCategories={selectedCategories}
                    selectedCategoryID={selectedCategoryID}
                />
                {preOrderContent && (
                    <PreOrder items={preOrderItems} content={preOrderContent} />
                )}
                <Testimonials />
                <Footer collections={collections} />
            </ThemeProvider>
        </div>
    );
}
