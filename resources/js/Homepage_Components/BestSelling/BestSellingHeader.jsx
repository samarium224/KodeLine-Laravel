import CustomButton from "@/Global_Components/CustomButton";
import Header from "@/Global_Components/Header";
import { Box } from "@mui/material";

const BestSellingHeader = ({ title, collections }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Header title={title} />
            <Box display="flex">
                {collections.map((category, i) => (
                    <CustomButton
                        key={i}
                        text={category.collection_name}
                        sx={{
                            mx: 1,
                            px: { xs: 2, md: 4 },
                            fontSize: { xs: "0.825rem", md: "1rem" },
                            fontWeight: "400",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default BestSellingHeader;
