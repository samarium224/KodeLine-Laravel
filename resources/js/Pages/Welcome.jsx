import { ThemeProvider } from "@mui/material/styles";
import theme_desktop from "@/Theme/theme";
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
    const { signatureItemsList } = usePage().props;
    const { width } = useWindowSize();

    const getTheme = () => {
        if (width > 1536) {
            return theme_desktop;
        } else if (width > 900) {
            return theme_laptop;
        } else {
            return theme_mobile;
        }
    };

    return (
        <div style={{ overflow: "hidden" }}>
            <ThemeProvider theme={getTheme()}>
                <Slogan />
                <Navigation />
                <SliderComponent></SliderComponent>
                <Banner
                    text="We are your partner in parenting! With top-notch products and
                    pocket-friendly prices, let's navigate parenthood together,
                    hassle-free"
                    variant="subtitle"
                />
                <Services />
                <SignatureItems signatureItemsList={signatureItemsList} />
                <ShopByCategory />
                <BestSellingItems />
                {/* <TopCategories /> */}
                <PreOrder items={preorderItems} />
                <Testimonials />
                <FooterTop />
                <Footer />
            </ThemeProvider>
        </div>
    );
}
