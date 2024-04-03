import { ThemeProvider } from "@mui/material/styles";
import theme_desktop from "@/Theme/theme";
import theme_laptop from "@/Theme/theme_laptop";
import theme_mobile from "@/Theme/theme_mobile";

import useWindowSize from "@/Util/useWindowSize";

import Navigation from "@/Global_Components/Navigationbar/Index";
import Header from "@/Collectionpage_Components/Header/Index";
import Banner from "@/Global_Components/Banner";
import Products from "@/Collectionpage_Components/Products/Index";
import PreOrder from "@/Global_Components/PreOrder/Index";
import Testimonials from "@/Global_Components/Testimonials/Index";
import Footer from "@/Global_Components/Footer/Index";
import Slogan from "@/Global_Components/Slogan";

import { preorderItems } from "@/Global_data/PreorderItems";
import { usePage } from "@inertiajs/react";

export default function Collection({ auth, laravelVersion, phpVersion }) {
    const { collections , collection_name} = usePage().props;
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
                <Navigation collections={collections} />
                <Header />
                <Banner
                    text={`EXPLORE ${collection_name.toUpperCase()} COLLECTION`}
                    variant="title"
                    sx={{
                        fontWeight: 500,
                        letterSpacing: { xs: "7.5px", md: "10px" },
                        wordSpacing: { xs: "12px", md: "15px;" },
                    }}
                />
                <Products />
                <PreOrder items={preorderItems} />
                <Testimonials />
                <Footer />
            </ThemeProvider>
        </div>
    );
}
