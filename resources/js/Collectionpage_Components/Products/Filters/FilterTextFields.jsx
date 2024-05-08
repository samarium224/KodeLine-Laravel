import { Box, TextField } from "@mui/material";

export const FilterTextFields = ({ filter, handleRangeChange }) => (
    <Box
        mx={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="16px"
    >
        <TextField
            type="number"
            label="Min Price"
            value={filter.priceRange[0]}
            onChange={(e) =>
                handleRangeChange([
                    Number(e.target.value),
                    filter.priceRange[1],
                ])
            }
            sx={{
                width: "150px",
                borderRadius: "0px",
                "& .MuiInputBase-input": {
                    py: { xs: 1.25, sm: 2 },
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    "&:focused": {
                        borderColor: "transparent",
                        boxShadow: "none !impotant",
                    },
                },
            }}
        />
        <TextField
            type="number"
            label="Max Price"
            value={filter.priceRange[1]}
            onChange={(e) =>
                handleRangeChange([
                    filter.priceRange[0],
                    Number(e.target.value),
                ])
            }
            sx={{
                width: "150px",
                borderRadius: "0px",
                "& .MuiInputBase-input": {
                    py: { xs: 1.25, sm: 2 },
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    "&:focused": {
                        borderColor: "transparent",
                        boxShadow: "none !impotant",
                    },
                },
            }}
        />
    </Box>
);
