import { Collections } from "@/Global_data/Collections";

export const collections = Collections.sort((a, b) => a.sortID - b.sortID).map(
    ({ collectionName }) => collectionName
);

export const bestSellingItemsList = [
    {
        itemID: 3,
        itemTitle: "GIRL'S PRINTED SUMMER DRESS",
        ageRange: [3, 6],
        currentPrice: 39.99,
        oldPrice: 49.99,
        imgURL: "",
    },
    {
        itemID: 3,
        itemTitle: "GIRL'S DENIM SHORTS & TEE SET",
        ageRange: [4, 7],
        currentPrice: 24.99,
        oldPrice: 34.99,
        imgURL: "",
    },
    {
        itemID: 3,
        itemTitle: "GIRL'S FLORAL ROMPER",
        ageRange: [2, 5],
        currentPrice: 29.99,
        oldPrice: 39.99,
        imgURL: "",
    },
    {
        itemID: 3,
        itemTitle: "GIRL'S STRIPED JUMPSUIT",
        ageRange: [5, 8],
        currentPrice: 34.99,
        oldPrice: 44.99,
        imgURL: "",
    },
    {
        itemID: 3,
        itemTitle: "BOY'S GRAPHIC TEE & SHORTS SET",
        ageRange: [4, 7],
        currentPrice: 29.99,
        oldPrice: 39.99,
        imgURL: "",
    },
    {
        itemID: 3,
        itemTitle: "BOY'S CARGO SHORTS & POLO SET",
        ageRange: [3, 6],
        currentPrice: 34.99,
        oldPrice: 44.99,
        imgURL: "",
    },
    {
        itemID: 3,
        itemTitle: "BOY'S SWIM TRUNKS & RASH GUARD",
        ageRange: [5, 8],
        currentPrice: 24.99,
        oldPrice: 34.99,
        imgURL: "",
    },
    {
        itemID: 3,
        itemTitle: "BOY'S JOGGER & HOODIE SET",
        ageRange: [2, 5],
        currentPrice: 39.99,
        oldPrice: 49.99,
        imgURL: "",
    },
];
