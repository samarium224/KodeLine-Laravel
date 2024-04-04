import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Banner from "@/Global_Components/Banner";

const SliderContent = ({ theme }) => (
    <Box
        sx={{
            backgroundImage: {
                xs: `url("./assets/New_6_9.png")`,
                sm: `url("./assets/New.png")`,
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
            <Typography
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
            </Typography>
            <Button
                sx={{
                    position: "absolute",
                    backgroundColor: theme.palette.text.white[100],
                    color: theme.palette.text.grey[500],
                    top: { lg: "50vh", xl: "475px" },
                    left: "37.5%",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    px: 10,
                    py: 2,
                    display: { md: "initial", xs: "none" },
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
        dots: true,
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
            <Banner />
        </Box>
    );
};

export default FooterTop;
