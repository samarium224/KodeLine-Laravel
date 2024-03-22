import { Box, useTheme } from "@mui/material";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
    const theme = useTheme();
    return (
        <Box
            mt={10}
            mb={15}
            mx={theme.containerMarginWidth}
            display="flex"
            justifyContent="space-between"
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
                subText="Registered Saskatchewan business ensures risk-free payments for peace of mind."
            />
        </Box>
    );
};

export default Services;
