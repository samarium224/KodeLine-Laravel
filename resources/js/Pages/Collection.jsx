import { ThemeProvider } from "@mui/material/styles";
import theme from "@/Theme/theme";

import Navigation from "@/Global_Components/Navigationbar/Index";
import Header from "@/Collectionpage_Components/Header/Index";
import Banner from "@/Global_Components/Banner";
import Products from "@/Collectionpage_Components/Products/Index";
import PreOrder from "@/Global_Components/PreOrder/Index";
import Testimonials from "@/Global_Components/Testimonials/Index";
import Footer from "@/Global_Components/Footer/Index";
import Slogan from "@/Global_Components/Slogan";

export default function Collection({ auth, laravelVersion, phpVersion }) {
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
                <Header />
                <Banner
                    text="EXPLORE BOY'S COLLECTION"
                    variant="title"
                    sx={{
                        fontWeight: 500,
                        letterSpacing: "10px",
                        wordSpacing: "15px;",
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
