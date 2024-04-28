import React, { useEffect, useRef } from "react";
import CustomButton from "@/Global_Components/CustomButton";
import Header from "@/Global_Components/Header";
import { Box } from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";

const SignatureItemsHeader = ({
    title,
    categoryList,
    currentCollectionID,
    setCurrentCollectionID,
}) => {
    const fadeFromBottom = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    const filteredCollections = [...categoryList];

    if (
        filteredCollections.length > 0 &&
        filteredCollections[filteredCollections.length - 1].collection_name ===
            "none"
    )
        filteredCollections.pop();
    filteredCollections.unshift({ collection_name: "All", collection_id: -1 });

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mb={6}>
            <Header title={title} />
            <Box display="flex" ref={ref}>
                {filteredCollections.map((category, i) => (
                    <CustomButton
                        key={i}
                        text={category.collection_name}
                        sx={{
                            mx: 1,
                            px: { xs: 2, md: 2 },
                            py: 0.75,
                            fontSize: { xs: "0.825rem", md: "1rem" },
                            fontWeight: "400",
                            backgroundColor:
                                currentCollectionID ===
                                    category.collection_id && "#e1e1e3",
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
