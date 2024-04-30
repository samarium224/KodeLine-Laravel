import { ThemeProvider } from "@mui/material/styles";
import theme from "@/Theme/theme_desktop";
import { Link } from "@inertiajs/react";
import Navigation from "@/Global_Components/Navigationbar/Index";

export default function DefaultPage({ children, auth }) {
    return (
        <ThemeProvider theme={theme}>
            <Navigation
                collections={[]}
                auth={auth}
                alternativeColor={true}
            />
            <div className="min-h-screen flex flex-col sm:justify-center items-center items-center pt-10 sm:pt-0 bg-white">
                <div>
                    <Link href="/">
                        {/* <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" /> */}
                        <img
                            className="w-80 mt-10"
                            src="../assets/ThanksForShoping.jpg"
                            alt="ThanksForShoping"
                        />
                    </Link>
                </div>
                <div className="w-full sm:max-w-md mt-2 px-6 py-1 bg-white overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
