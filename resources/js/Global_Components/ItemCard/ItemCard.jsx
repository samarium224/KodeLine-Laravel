import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";

import Itemdesc from "@/Global_Components/ItemCard/Itemdesc";
import ProductShowcase from "@/Global_Components/ItemCard/ProductShowcase";

const ItemCard = ({
    itemID,
    itemImage,
    itemTitle,
    ageRange,
    currentPrice,
    oldPrice,
    buttonText,
    animationDelay = 0.25,
}) => {
    const sale = Math.round(((oldPrice - currentPrice) / oldPrice) * 100);

    const fadeFromBottom = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) mainControls.start("visible");
    }, [isInView]);

    return (
        <Box
            ref={ref}
            component={motion.div}
            variants={fadeFromBottom}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.33, delay: animationDelay }}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <ProductShowcase
                itemID={itemID}
                itemImage={itemImage}
                sale={sale > 0 && sale}
                buttonText={buttonText}
            />
            <Itemdesc
                mainText={itemTitle}
                ageRange={ageRange}
                currentPrice={currentPrice}
                oldPrice={currentPrice != oldPrice && oldPrice}
                alternativeCard={buttonText == "PRE ORDER"}
            ></Itemdesc>
        </Box>
    );
};

export default ItemCard;
