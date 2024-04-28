import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const ColorVariants = ({
    colorVariants,
    selectedIndex,
    onChangeColor,
    colorIndex,
}) => {
    const theme = useTheme();

    if (colorVariants[0] == "") colorVariants.shift();
    if (colorVariants.length > 0)
        return (
            <Box className="colors" mt={3}>
                <Typography
                    variant="itemdescTitle"
                    display="block"
                    textTransform="initial"
                    color={theme.palette.text.grey[500]}
                    mb={1.5}
                >
                    Colour <span style={{ fontWeight: "200" }}>|</span>{" "}
                    <Typography
                        variant="itemdescSubtitle"
                        color={theme.palette.text.grey[500]}
                        fontSize="0.9rem"
                        textTransform="initial"
                        fontWeight="300"
                    >
                        {colorVariants[colorIndex]}
                    </Typography>
                </Typography>
                {colorVariants.map((colorVariant, i) => (
                    <Box
                        key={i}
                        sx={{
                            backgroundSize: "cover",
                            border: `2px solid ${
                                selectedIndex.color === i
                                    ? theme.palette.text.grey[800]
                                    : theme.palette.text.grey[400]
                            }`,
                            mr: 1,
                            transition: "0.2s all ease",
                        }}
                        display="inline-block"
                        onClick={() => onChangeColor(i)}
                    >
                        <img
                            src={
                                colorVariant.imgURL
                                    ? colorVariant.imgURL
                                    : "./assets/blank.jpg"
                            }
                            height="40"
                            width="40"
                            style={{ margin: "2px" }}
                        />
                    </Box>
                ))}
            </Box>
        );
};

export default ColorVariants;
