import { ThemeProvider } from "@mui/material/styles";
import theme from "@/Theme/theme";

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

import { usePage } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const { signatureItemsList } = usePage().props;
    const preorderItems = [
        {
            itemTitle: "GIRL'S SUMMER FASHION OUTFIT",
            ageRange: [3, 6],
            currentPrice: 37.5,
            oldPrice: 50,
            buttonText: "PRE ORDER",
        },
        {
            itemTitle: "BOY's WINTER FASHION OUTFIT",
            ageRange: [4, 7],
            currentPrice: 37.5,
            oldPrice: 50,
            buttonText: "PRE ORDER",
        },
    ];

    return (
        <div style={{ overflow: "hidden" }}>
            <ThemeProvider theme={theme}>
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
