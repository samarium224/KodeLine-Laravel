import CustomButton from "@/Global_Components/CustomButton";
import Header from "@/Global_Components/Header";
import { Box } from "@mui/material";

const SignatureItemsHeader = ({ title, categoryList }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Header title={title} />
            <Box display="flex">
                {categoryList.map((category, i) => (
                    <CustomButton
                        key={i}
                        text={category}
                        sx={{ px: 5, fontSize: "1.2rem", fontWeight: "400" }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default SignatureItemsHeader;
