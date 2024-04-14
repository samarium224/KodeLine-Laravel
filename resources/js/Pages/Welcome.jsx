import { ThemeProvider } from "@mui/material/styles";
import theme_desktop from "@/Theme/theme_desktop";
import theme_laptop from "@/Theme/theme_laptop";
import theme_mobile from "@/Theme/theme_mobile";

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

import { preorderItems } from "@/Global_data/PreorderItems";

import { usePage } from "@inertiajs/react";

export default function Welcome({ auth }) {
    const {
        signatureItemsList,
        collections,
        collectionItemList,
        featuredcollection,
        bestsellingItems,
    } = usePage().props;
    const { width } = useWindowSize();

    const getTheme = () => {
        if (width > 1536) return theme_desktop;
        else if (width > 900) return theme_laptop;
        else return theme_mobile;
    };

    return (
        <div style={{ overflow: "hidden" }}>
            <ThemeProvider theme={getTheme()}>
                <Slogan />
                <Navigation collections={collections} auth={auth} />
                <SliderComponent></SliderComponent>
                {/* <Banner
                    text="Kidsline is your trusted companion, offering a lovingly curated range of top-notch children's products. With swift, free delivery, we
                    make every purchase a joy. Our commitment to uncompromising quality strengthens the bond between you and your little ones,
                    creating cherished moments filled with laughter, warmth, and unforgettable memories."
                    variant="itemdescTitle"
                    sx={{ textTransform: "initial" }}
                /> */}
                <Services />
                <SignatureItems
                    signatureItemsList={signatureItemsList}
                    collections={featuredcollection}
                />
                <ShopByCategory CollectionItemList={collectionItemList} />
                <BestSellingItems
                    bestSellingItemsList={bestsellingItems}
                    collections={collections}
                />
                {/* <TopCategories /> */}
                <PreOrder items={preorderItems} />
                <Testimonials />
                <FooterTop />
                <Footer />
            </ThemeProvider>
        </div>
    );
}
