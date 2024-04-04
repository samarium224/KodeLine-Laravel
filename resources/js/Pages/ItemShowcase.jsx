import { ThemeProvider } from "@mui/material/styles";
import theme from "@/Theme/theme";
import { Box } from "@mui/material";

import Slogan from "@/Global_Components/Slogan";
import Navigation from "@/Global_Components/Navigationbar/Index";
import ItemDescription from "@/ItemShocase_Components/ItemDescription/Index";
import PreOrder from "@/Global_Components/PreOrder/Index";
import Header from "@/Global_Components/Header";
import Testimonials from "@/Global_Components/Testimonials/Index";
import Footer from "@/Global_Components/Footer/Index";

import { usePage } from "@inertiajs/react";

export default function ItemShowcase({ auth, laravelVersion, phpVersion }) {
    const { collections , product} = usePage().props;

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
                <Navigation collections={collections} auth={auth} />
                <ItemDescription product={product} />
                <Header title="You may also like" />
                <Box my={5}></Box>
                <PreOrder items={preorderItems} />
                <Testimonials />
                <Footer />
            </ThemeProvider>
        </div>
    );
}
