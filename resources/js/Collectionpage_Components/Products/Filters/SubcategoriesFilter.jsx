import { Box, Checkbox, Typography } from "@mui/material";

export const SubcategoriesFilter = ({ filter, handlescclick }) => (
    <Box>
        {filter.subcategories.map((subcategory, i) => (
            <Box
                display="flex"
                alignItems="center"
                key={i}
                onClick={() => handlescclick(i)}
            >
                <Checkbox
                    checked={subcategory.active}
                    onChange={() => {}}
                    sx={{
                        height: "32px",
                        scale: { xs: "0.9", md: "1" },
                    }}
                ></Checkbox>
                <Typography
                    variant="itemdescTitle"
                    textTransform="initial"
                    fontWeight={400}
                    sx={{ scale: "0.9" }}
                >
                    {subcategory.name}
                </Typography>
            </Box>
        ))}
    </Box>
);
