import { IColor } from "./IColor";

export interface IProduct 
{
    id: number,
    description: string,
    sizes: number[],
    favorite: boolean,
    colors: IColor[],
    category: string,
    image: string,
    gender: "M" | "W",
    price: number
}