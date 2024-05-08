import { Typography } from "@mui/material";

export const FilterHeader = ({ text }) => {
    return (
        <Typography
            variant="itemdescTitle"
            textTransform="initial"
            fontWeight={600}
            ml={1}
        >
            {text}
        </Typography>
    );
};
