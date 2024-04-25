import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const ColorVariants = ({ colorVariants, selectedIndex, onChangeColor }) => {
    const theme = useTheme();

    return (
        <Box className="colors" mt={5}>
            <Typography
                variant="itemdescTitle"
                display="block"
                color={theme.palette.text.grey[500]}
                my={1}
            >
                Colour
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
