import { Container } from "@mui/material";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
    return (
        <Container
            maxWidth="desktopMaxWidth"
            sx={{
                mt: { md: 12.5, xs: 8 },
                mb: { md: 15, xs: 10 },
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { md: "row", xs: "column" },
            }}
        >
            <ServiceComponent
                text="Curated with Care"
                subText="Discover handpicked kids items <br/> featuring captivating designs, perfect for loved ones."
            />
            <ServiceComponent
                text="Effortless Solutions"
                subText="Enjoy hasslefree shopping experience with fast delivery, because your convenience matters to us!"
            />
            <ServiceComponent
                text="Trustworthy Transactions"
                subText="As a registered Saskatchewan business, we guarantee secure payments for your peace of mind."
            />
        </Container>
    );
};

export default Services;
