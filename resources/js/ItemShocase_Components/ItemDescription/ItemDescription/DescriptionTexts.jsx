import { Typography, Box, useTheme } from "@mui/material";
import sanitizeHtml from "sanitize-html";

const DescriptionText = ({ itemDescription }) => {
    const theme = useTheme();
    const sanitizedDescription = sanitizeHtml(itemDescription.desc, {
        allowedTags: [
            "b",
            "i",
            "em",
            "strong",
            "a",
            "p",
            "br",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "span",
            "div",
            "u",
            "ul",
            "li",
            "ol",
        ],
        allowedAttributes: { a: ["href"] },
    });

    return (
        <Box className="description-text" mt={5}>
            <Typography
                variant="itemdescTitle"
                display="block"
                textTransform="initial"
                color={theme.palette.text.grey[600]}
                my={1}
            >
                {itemDescription.title}
            </Typography>
            <Typography
                variant="itemdescTitle"
                display="block"
                textTransform="initial"
                color={theme.palette.text.grey[500]}
                my={2}
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            />
        </Box>
    );
};

export default DescriptionText;
