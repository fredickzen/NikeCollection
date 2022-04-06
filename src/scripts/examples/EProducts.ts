import { IProduct } from "@interfaces/models/IProduct";

export const EProducts: IProduct[] = [
    {
        id: 1,
        description: "Nike 1 Waffle One SE",
        sizes: [9, 10, 10.5, 11],
        favorite: false,
        colors: [
            { code: "#B03A2E", description: "red" },
            { code: "#D35400", description: "orange" },
            { code: "#28B463", description: "green" },
        ],
        category: "LifeStyle",
        image: "nike_1.png",
        gender: "M",
        price: 150.1
    },
    {
        id: 2,
        description: "Nike 2",
        sizes: [9, 10, 10.5, 11, 12],
        favorite: false,
        colors: [{ code: "#B03A2E", description: "red" }],
        category: "Running",
        image: "nike_2.png",
        gender: "M",
        price: 160
    },
    {
        id: 3,
        description: "Nike 3 Waffle One SE",
        sizes: [10.5, 11],
        favorite: false,
        colors: [
            { code: "#B03A2E", description: "red" },
            { code: "#D35400", description: "orange" },
        ],
        category: "LifeStyle",
        image: "nike_3.png",
        gender: "W",
        price: 120
    },
    {
        id: 4,
        description: "Nike 4 Waffle One SE",
        sizes: [9, 10, 10.5, 11],
        favorite: false,
        colors: [
            { code: "#B03A2E", description: "red" },
            { code: "#28B463", description: "green" },
        ],
        category: "LifeStyle",
        image: "nike_4.png",
        gender: "W",
        price: 110
    },
    {
        id: 5,
        description: "Nike 5",
        sizes: [9, 10],
        favorite: false,
        colors: [
            { code: "#D35400", description: "orange" },
            { code: "#28B463", description: "green" },
        ],
        category: "Running",
        image: "nike_5.png",
        gender: "M",
        price: 140.1
    },
    {
        id: 6,
        description: "Nike 6",
        sizes: [8, 9, 10, 10.5, 11],
        favorite: false,
        colors: [
            { code: "#B03A2E", description: "red" },
            { code: "#D35400", description: "orange" },
            { code: "#28B463", description: "green" },
        ],
        category: "Tennis",
        image: "nike_6.png",
        gender: "M",
        price: 150
    },
    {
        id: 7,
        description: "Nike 6.1 Waffle One SE",
        sizes: [8, 9, 10, 10.5, 11],
        favorite: false,
        colors: [
            { code: "#B03A2E", description: "red" },
            { code: "#D35400", description: "orange" },
            { code: "#28B463", description: "green" },
        ],
        category: "Sports",
        image: "nike_6.png",
        gender: "M",
        price: 150
    },
];
