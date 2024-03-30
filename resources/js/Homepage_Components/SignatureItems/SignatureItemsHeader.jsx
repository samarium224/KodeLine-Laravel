import CustomButton from "@/Global_Components/CustomButton";
import Header from "@/Global_Components/Header";
import { Box } from "@mui/material";

const SignatureItemsHeader = ({ title, categoryList }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" mb={5}>
            <Header title={title} />
            <Box display="flex">
                {categoryList.map((category, i) => (
                    <CustomButton
                        key={i}
                        text={category}
                        sx={{
                            px: { xs: 2.5, md: 5 },
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            fontWeight: "400",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default SignatureItemsHeader;
