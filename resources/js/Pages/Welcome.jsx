import { ThemeProvider } from "@mui/material/styles";
import theme_desktop from "@/Theme/theme_desktop";
import theme_laptop from "@/Theme/theme_laptop";
import theme_laptop_sm from "@/Theme/theme_laptop_sm";
import theme_mobile from "@/Theme/theme_mobile";
import { breakpoint_values } from "@/Theme/breakpoints";

import useWindowSize from "@/Util/useWindowSize";

import SliderComponent from "@/Homepage_Components/Slider/Slider";
import Banner from "@/Global_Components/Banner";
import Services from "@/Homepage_Components/Services/Services";
import SignatureItems from "@/Homepage_Components/SignatureItems/Index";
import ShopByCategory from "@/Homepage_Components/CategoryListing/Index";
import TopCategories from "@/Homepage_Components/TopCategories/Index";
import Testimonials from "@/Global_Components/Testimonials/Index";
import Navigation from "@/Global_Components/Navigationbar/Index";
import Footer from "@/Global_Components/Footer/Index";
import BestSellingItems from "@/Homepage_Components/BestSelling/Index";
import PreOrder from "@/Global_Components/PreOrder/Index";
import FooterTop from "@/Homepage_Components/FooterTop";
import Slogan from "@/Global_Components/Slogan";

import { usePage } from "@inertiajs/react";

export default function Welcome({ auth }) {
    const {
        sliderItems,
        signatureItemsList,
        collections,
        collectionItemList,
        featuredcollection,
        bestsellingItems,
        bestsellingCollection,
        preOrderContent,
        preOrderItems,
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
                <Slogan />
                <Navigation collections={collections} auth={auth} />
                <SliderComponent sliderItems={sliderItems}></SliderComponent>
                <Banner
                    text="Step into a world where online shopping feels effortless and full of love! <br/> With top-notch products and pocket-friendly prices, let's navigate parenthood together, hassle-free."
                    variant="subtitle"
                    sx={{ textTransform: "initial" }}
                />
                <Services />
                <SignatureItems
                    signatureItemsList={signatureItemsList}
                    collections={featuredcollection}
                />
                <ShopByCategory CollectionItemList={collectionItemList} />
                <BestSellingItems
                    bestSellingItemsList={bestsellingItems}
                    collections={bestsellingCollection}
                />
                <TopCategories RestCategories={collections} />

                {preOrderContent && (
                    <PreOrder items={preOrderItems} content={preOrderContent} />
                )}
                <Testimonials />
                <FooterTop />
                <Footer collections={collections} />
            </ThemeProvider>
        </div>
    );
}
