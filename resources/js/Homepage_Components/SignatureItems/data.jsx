import { Collections } from "@/Global_data/Collections";

export const collections = Collections.sort((a, b) => a.sortID - b.sortID).map(
    ({ collectionName }) => collectionName
);

// export const getData = () => usePage().props;

export const signatureItemsList = [
    {
        itemID: 5,
        itemTitle: "GIRL'S SUMMER FASHION OUTFIT",
        ageRange: [3, 6],
        currentPrice: 40,
        oldPrice: 50,
        imgURL: "./assets/Shoes_6_9.png",
    },
    {
        itemID: 5,
        itemTitle: "GIRL'S SUMMER FASHION OUTFIT",
        ageRange: [3, 6],
        currentPrice: 22.5,
        oldPrice: 30,
        imgURL: "",
    },
    {
        itemID: 5,
        itemTitle: "GIRL'S SUMMER FASHION OUTFIT",
        ageRange: [4, 7],
        currentPrice: 50,
        oldPrice: 65,
        imgURL: "",
    },
    {
        itemID: 5,
        itemTitle: "GIRL'S SUMMER FASHION OUTFIT",
        ageRange: [5, 8],
        currentPrice: 32.5,
        oldPrice: 40,
        imgURL: "",
    },
    {
        itemID: 5,
        itemTitle: "BOY'S CASUAL OUTFIT",
        ageRange: [6, 9],
        currentPrice: 45,
        oldPrice: 60,
        imgURL: "",
    },
    {
        itemID: 5,
        itemTitle: "GIRL'S PARTY DRESS",
        ageRange: [2, 5],
        currentPrice: 35,
        oldPrice: 45,
        imgURL: "",
    },
    {
        itemID: 5,
        itemTitle: "BOY'S SUMMER SHORTS SET",
        ageRange: [4, 7],
        currentPrice: 28,
        oldPrice: 35,
        imgURL: "",
    },
    {
        itemID: 5,
        itemTitle: "SNEAKERS FOR KIDS",
        ageRange: [5, 8],
        currentPrice: 25,
        oldPrice: 30,
        imgURL: "",
    },
];
