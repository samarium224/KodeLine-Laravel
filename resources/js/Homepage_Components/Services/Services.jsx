import { Container } from "@mui/material";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
    return (
        <Container
            maxWidth="desktopMaxWidth"
            sx={{
                mt: { md: 10, xs: 7.5 },
                mb: { md: 15, xs: 10 },
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { md: "row", xs: "column" },
            }}
        >
            <ServiceComponent
                text="Curated Selection"
                subText="Handpicked items for attractive designs, approved for Regina families."
            />
            <ServiceComponent
                text="Swift Solution"
                subText="Free shipping within 48 hours to Regina homes, hassle-free."
            />
            <ServiceComponent
                text="Secure Transaction"
                subText="Registered Saskatchewan business ensures risk-free payments."
            />
        </Container>
    );
};

export default Services;
