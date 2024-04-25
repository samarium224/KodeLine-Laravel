import CustomButton from "@/Global_Components/CustomButton";
import Header from "@/Global_Components/Header";
import { Box } from "@mui/material";

const SignatureItemsHeader = ({
    title,
    categoryList,
    setCurrentCollectionID,
}) => {
    const filteredCollections = [...categoryList];

    if (
        filteredCollections.length > 0 &&
        filteredCollections[filteredCollections.length - 1].collection_name ===
            "none"
    )
        filteredCollections.pop();
    filteredCollections.unshift({ collection_name: "All", collection_id: -1 });

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mb={5}>
            <Header title={title} />
            <Box display="flex">
                {filteredCollections.map((category, i) => (
                    <CustomButton
                        key={i}
                        text={category.collection_name}
                        sx={{
                            mx: 1,
                            px: { xs: 2, md: 4 },
                            fontSize: { xs: "0.825rem", md: "1rem" },
                            fontWeight: "400",
                        }}
                        onClick={() =>
                            setCurrentCollectionID(category.collection_id)
                        }
                    />
                ))}
            </Box>
        </Box>
    );
};

export default SignatureItemsHeader;
