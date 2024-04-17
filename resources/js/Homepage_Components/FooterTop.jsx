import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Banner from "@/Global_Components/Banner";

const SliderContent = ({ theme }) => (
    <Box
        sx={{
            backgroundImage: {
                xs: `url("./All Images/Fast Delivery_Image.png")`,
                sm: `url("./All Images/Fast Delivery_Image.png")`,
            },
            backgroundPosition: "right bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: { xs: "100%", maxAllowableWidth: "1920px" },
            height: {
                xs: "600px",
                lg: "100vh",
                maxAllowableWidth: "1000px",
            },
            mx: "auto",
        }}
    >
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            {/* <Typography
                variant="headline"
                sx={{
                    position: "absolute",
                    color: theme.palette.text.grey[500],
                    transform: { xs: "translate(-50%, -50%)", md: "initial" },
                    top: { xs: "120px", md: "25vh", xl: "250px" },
                    left: { xs: "50%", md: "37.5%" },
                    textAlign: { md: "left", xs: "center" },
                    fontWeight: "700",
                    width: "100%",
                }}
            >
                Simplifying Choices <br /> Maximizing Convenience
            </Typography> */}
            <Button
                sx={{
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                    top: { lg: "75%", xl: "600px" },
                    left: "50%",
                    color: theme.palette.text.white[500],
                    backgroundColor: "transparent",
                    border: `2px solid ${theme.palette.text.white[500]}`,
                    fontWeight: "500",
                    fontSize: {
                        xl: "1.25rem",
                        md: "1rem",
                        xs: "0.9rem",
                    },
                    px: { xl: 9, md: 6, xs: 4 },
                    py: { xl: 1.66, md: 1.2, xs: 1 },
                    "&:hover": {
                        backgroundColor: theme.palette.text.white[500],
                        color: theme.palette.text.grey[500],
                    },
                }}
            >
                SHOP NOW
            </Button>
        </Container>
    </Box>
);

const FooterTop = () => {
    const theme = useTheme();
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        appendDots: (dots) => (
            <Box
                sx={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    display="flex"
                    gap={0.25}
                    sx={{
                        "& > li": { width: "3px" },
                        "& > .slick-active div": { backgroundColor: "white" },
                    }}
                >
                    {dots}
                </Box>
            </Box>
        ),
        customPaging: (i) => (
            <Box
                sx={{
                    width: 8,
                    height: 8,
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "50%",
                    cursor: "pointer",
                    transition: "0.3s ease",
                }}
            >
                <div />
            </Box>
        ),
    };

    return (
        <Box backgroundColor={theme.palette.primary.main}>
            <Slider {...settings}>
                <SliderContent theme={theme} />
                <SliderContent theme={theme} />
                <SliderContent theme={theme} />
            </Slider>
            {/* <Banner /> */}
        </Box>
    );
};

export default FooterTop;
