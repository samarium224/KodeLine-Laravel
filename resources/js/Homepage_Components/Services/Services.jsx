import { Container } from "@mui/material";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
    return (
        <Container
            maxWidth="desktopMaxWidth"
            sx={{
                mt: 6,
                mb: 3.5,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { md: "row", xs: "column" },
            }}
        >
            <ServiceComponent
                imgURL="./assets/Curated.png"
                text="Curated with Care"
                subText="Discover handpicked kids items <br/> featuring captivating designs, perfect for loved ones."
            />
            <ServiceComponent
                imgURL="./assets/Decured Transaction.png"
                text="Effortless Solutions"
                subText="Enjoy hasslefree shopping experience with fast delivery, because your convenience matters to us!"
            />
            <ServiceComponent
                imgURL="./assets/Effortless.png"
                text="Trustworthy Transactions"
                subText="As a registered Saskatchewan business, we guarantee secure payments for your peace of mind."
            />
        </Container>
    );
};

export default Services;
