import { Collections } from "@/Global_data/Collections";

const UnsortedCollectionItemList = [
    {
        ID: 1,
        categoryTitle: "Girl's Summer Collection",
        categoryMobileQuote: {
            title: "Sun-kissed Style",
            subtitle: "For Every Little Princess",
        },
        categoryImage: "./assets/Girls_6_9.png",
        categoryItemList: [
            {
                itemTitle: "GIRL'S PRINTED SUMMER DRESS",
                ageRange: [3, 6],
                currentPrice: 39.99,
                oldPrice: 49.99,
                imgURL: "",
            },
            {
                itemTitle: "GIRL'S DENIM SHORTS & TEE SET",
                ageRange: [4, 7],
                currentPrice: 24.99,
                oldPrice: 34.99,
                imgURL: "",
            },
            {
                itemTitle: "GIRL'S FLORAL ROMPER",
                ageRange: [2, 5],
                currentPrice: 29.99,
                oldPrice: 39.99,
                imgURL: "",
            },
            {
                itemTitle: "GIRL'S STRIPED JUMPSUIT",
                ageRange: [5, 8],
                currentPrice: 34.99,
                oldPrice: 44.99,
                imgURL: "",
            },
        ],
    },
    {
        ID: 2,
        categoryTitle: "Boy's Summer Collection",
        categoryMobileQuote: {
            title: "Sun-kissed Style",
            subtitle: "For Every Little Princess",
        },
        categoryImage: "./assets/Boys_6_9.png",
        categoryItemList: [
            {
                itemTitle: "BOY'S GRAPHIC TEE & SHORTS SET",
                ageRange: [4, 7],
                currentPrice: 29.99,
                oldPrice: 39.99,
                imgURL: "./assets/New_6_9.png",
            },
            {
                itemTitle: "BOY'S CARGO SHORTS & POLO SET",
                ageRange: [3, 6],
                currentPrice: 34.99,
                oldPrice: 44.99,
                imgURL: "",
            },
            {
                itemTitle: "BOY'S SWIM TRUNKS & RASH GUARD",
                ageRange: [5, 8],
                currentPrice: 24.99,
                oldPrice: 34.99,
                imgURL: "",
            },
            {
                itemTitle: "BOY'S JOGGER & HOODIE SET",
                ageRange: [2, 5],
                currentPrice: 39.99,
                oldPrice: 49.99,
                imgURL: "",
            },
        ],
    },
    {
        ID: 3,
        categoryTitle: "Shoes Collection",
        categoryMobileQuote: {
            title: "Sun-kissed Style",
            subtitle: "For Every Little Princess",
        },
        categoryImage: "./assets/Shoes_6_9.png",
        categoryItemList: [
            {
                itemTitle: "GIRL'S SANDALS",
                ageRange: [3, 6],
                currentPrice: 19.99,
                oldPrice: 24.99,
                imgURL: "",
            },
            {
                itemTitle: "BOY'S SNEAKERS",
                ageRange: [4, 7],
                currentPrice: 29.99,
                oldPrice: 39.99,
                imgURL: "",
            },
            {
                itemTitle: "GIRL'S BALLET FLATS",
                ageRange: [2, 5],
                currentPrice: 22.99,
                oldPrice: 27.99,
                imgURL: "",
            },
            {
                itemTitle: "BOY'S LOAFERS",
                ageRange: [5, 8],
                currentPrice: 34.99,
                oldPrice: 44.99,
                imgURL: "",
            },
        ],
    },
];

export const CollectionItemList = Collections.sort(
    (a, b) => a.sortID - b.sortID
).map(({ ID }) => {
    const collection = UnsortedCollectionItemList.find(
        ({ ID: itemID }) => itemID === ID
    );
    return collection;
});
