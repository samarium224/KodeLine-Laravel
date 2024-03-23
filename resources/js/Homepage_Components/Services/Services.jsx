import { Box, Container, useTheme } from "@mui/material";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
    const theme = useTheme();
    return (
        <Container
            maxWidth="xl"
            sx={{
                mt: 10,
                mb: 15,
                display: "flex",
                justifyContent: "space-between",
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
